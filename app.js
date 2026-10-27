// ==============================================================================
// PAUL BUSINESS SOLUTIONS (PBS) — PORTFOLIO WEBSITE JAVASCRIPT
// Handles Interactive Filtering, Screenshot Lightbox, and Mobile Navigation
// ==============================================================================

function startApp() {
  initNavigation();
  if (typeof PBS_PROJECTS !== 'undefined') {
    renderProjects('all');
  } else {
    setTimeout(() => {
      if (typeof PBS_PROJECTS !== 'undefined') renderProjects('all');
    }, 50);
  }
  initFilterTabs();
  initModal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

// Mobile Drawer & Smooth Navigation
function initNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
        menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      });
    });
  }
}

// Render Project Showcase Cards
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof PBS_PROJECTS === 'undefined') return;

  const filtered = filter === 'all'
    ? PBS_PROJECTS
    : PBS_PROJECTS.filter(p => p.categoryKey === filter || (filter === 'systems' && p.categoryKey === 'automation'));

  grid.innerHTML = filtered.map((p, idx) => {
    const hasMedia = p.primaryImage !== null;
    const screenshotCount = p.screenshots ? p.screenshots.length : 0;
    const isPriority = idx < 2;

    const mediaHtml = hasMedia ? `
      <div class="project-card-media" onclick="openProjectModal('${p.id}')">
        <div class="media-badge-group">
          <span class="badge ${p.badgeClass}">${p.statusBadge}</span>
          ${screenshotCount > 0 ? `<span class="badge" style="background: rgba(16, 36, 69, 0.75); color: #fff;">${screenshotCount} Views</span>` : ''}
        </div>
        <img src="${p.primaryImage}" alt="${p.name} Desktop Screenshot" loading="${isPriority ? 'eager' : 'lazy'}" ${idx === 0 ? 'fetchpriority="high"' : ''}>
        <div class="media-expand-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8M9 9 3 3m6 6V4.2M9 9H4.2"/></svg>
          Inspect Visual Evidence
        </div>
      </div>
    ` : `
      <div class="project-card-media" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #102445 0%, #1c3c62 100%); padding: 2rem; text-align: center;">
        <div class="media-badge-group">
          <span class="badge ${p.badgeClass}">${p.statusBadge}</span>
        </div>
        <div style="width: 56px; height: 56px; border-radius: 12px; background: rgba(0, 151, 178, 0.2); display: flex; align-items: center; justify-content: center; color: #3ccde6; margin-bottom: 1rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
        </div>
        <h4 style="color: #ffffff; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem;">Physical IT Infrastructure</h4>
        <p style="color: #94a3b8; font-size: 0.8rem; max-width: 320px;">On-premise hardware provisioning, rack networking & workstation configuration.</p>
      </div>
    `;

    const liveBtnHtml = p.liveUrl ? `
      <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-live-link">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        Live Demo
      </a>
    ` : `<span style="font-size: 0.75rem; color: #94a3b8;">On-Premise / Local Host</span>`;

    const featuresHtml = p.features.slice(0, 3).map(f => `
      <div class="project-feature-item">
        <span class="project-feature-bullet">✓</span>
        <span>${f}</span>
      </div>
    `).join('');

    const tagsHtml = p.techStack.slice(0, 4).map(t => `<span class="tag-pill">${t}</span>`).join('');

    return `
      <article class="project-card" data-id="${p.id}" data-category="${p.categoryKey}">
        ${mediaHtml}
        <div class="project-card-body">
          <div class="project-card-header">
            <div class="project-card-category">${p.categoryLabel}</div>
            <h3 class="project-card-title">${p.name}</h3>
          </div>
          <p class="project-card-desc">${p.subtitle}. ${p.problem}</p>
          <div class="project-features-list">
            ${featuresHtml}
          </div>
          <div class="project-card-tags">
            ${tagsHtml}
          </div>
          <div class="project-card-footer">
            <button type="button" class="project-view-btn" onclick="openProjectModal('${p.id}')">
              <span>View Case & Proof</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            ${liveBtnHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filter Tabs Handling
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Interactive Lightbox / Modal for Screenshots
let currentProject = null;
let currentScreenshotIndex = 0;

function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextScreenshot();
    if (e.key === 'ArrowLeft') prevScreenshot();
  });
}

function openProjectModal(projectId) {
  const project = PBS_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  currentProject = project;
  currentScreenshotIndex = 0;

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  modalTitle.textContent = `${project.name} — ${project.subtitle}`;
  modalDesc.textContent = project.solution;

  updateModalView();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateModalView() {
  if (!currentProject) return;

  const frame = document.getElementById('modalScreenshotFrame');
  const captionEl = document.getElementById('modalCaption');
  const galleryEl = document.getElementById('modalGallery');
  const metaEl = document.getElementById('modalMetaNotice');

  if (!currentProject.screenshots || currentProject.screenshots.length === 0) {
    frame.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: #fff;">
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Turnkey On-Premise Implementation</h4>
        <p style="color: #94a3b8; max-width: 500px; margin: 0 auto; font-size: 0.9rem;">
          Physical deployment completed at organization premises. Hardware configurations, structured network cabling, and workstation provisioning are documented in client-confidential delivery handovers.
        </p>
      </div>
    `;
    captionEl.textContent = "Physical Deployment — On-Site Execution";
    galleryEl.innerHTML = '';
    metaEl.innerHTML = `<strong>Delivery Status:</strong> Completed physical on-site deployment. Technical assets maintained under client review.`;
    return;
  }

  const currentShot = currentProject.screenshots[currentScreenshotIndex];
  frame.innerHTML = `
    <img src="${currentShot.url}" alt="${currentProject.name} Screenshot ${currentScreenshotIndex + 1}" style="max-height: 56vh; width: 100%; object-fit: contain;" loading="eager">
  `;
  captionEl.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.8rem; flex-wrap: wrap; width: 100%;">
      <div><strong>View ${currentScreenshotIndex + 1} of ${currentProject.screenshots.length}:</strong> ${currentShot.caption}</div>
      ${currentShot.fullUrl ? `
        <a href="${currentShot.fullUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost-light" style="font-size: 0.75rem; padding: 0.35rem 0.8rem; border-radius: 9999px; text-decoration: none;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          Open 2880×2000 Original ↗
        </a>
      ` : ''}
    </div>
  `;

  // Thumbnails using optimized WebP derivatives
  galleryEl.innerHTML = currentProject.screenshots.map((s, idx) => `
    <div class="gallery-thumb ${idx === currentScreenshotIndex ? 'active' : ''}" onclick="selectScreenshot(${idx})" title="View screenshot ${idx + 1}">
      <img src="${s.thumbUrl || s.url}" alt="Thumbnail ${idx + 1}" loading="lazy">
    </div>
  `).join('');

  // Notice
  metaEl.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <strong>Verified Capabilities:</strong> ${currentProject.features.join(' • ')}
      </div>
      ${currentProject.syntheticNotice ? `<div style="color: var(--pbs-emerald); font-weight: 600; font-size: 0.78rem;">✓ ${currentProject.syntheticNotice}</div>` : ''}
    </div>
  `;
}

function selectScreenshot(idx) {
  currentScreenshotIndex = idx;
  updateModalView();
}

function nextScreenshot() {
  if (!currentProject || !currentProject.screenshots) return;
  currentScreenshotIndex = (currentScreenshotIndex + 1) % currentProject.screenshots.length;
  updateModalView();
}

function prevScreenshot() {
  if (!currentProject || !currentProject.screenshots) return;
  currentScreenshotIndex = (currentScreenshotIndex - 1 + currentProject.screenshots.length) % currentProject.screenshots.length;
  updateModalView();
}


