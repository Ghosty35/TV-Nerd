const baseCatalog = [
  { id: 'severance', title: 'Severance', year: '2022', type: 'Series', genre: 'Sci-fi / Thriller', rating: '8.7', status: 'Watching', episodes: 19, next: 'S2 E5', nextDate: 'Feb 20', runtime: '44 min', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80', description: 'At Lumon Industries, employees undergo a procedure that separates their work memories from their personal memories. Mark and his colleagues start to question what is really happening behind the glass walls.' },
  { id: 'last-of-us', title: 'The Last of Us', year: '2023', type: 'Series', genre: 'Drama / Survival', rating: '8.8', status: 'Watching', episodes: 16, next: 'S2 E3', nextDate: 'Apr 28', runtime: '52 min', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', description: 'Twenty years after modern civilization has been destroyed, Joel and Ellie cross a transformed America in a story about survival, trust, and the cost of love.' },
  { id: 'white-lotus', title: 'The White Lotus', year: '2021', type: 'Series', genre: 'Comedy / Drama', rating: '8.0', status: 'Watching', episodes: 21, next: 'S3 E2', nextDate: 'Mar 2', runtime: '59 min', poster: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', description: 'Guests and staff at an exclusive resort reveal the darker side of luxury as their carefully curated vacations begin to unravel.' },
  { id: 'andor', title: 'Andor', year: '2022', type: 'Series', genre: 'Sci-fi / Adventure', rating: '8.4', status: 'Up next', episodes: 24, next: 'S1 E8', nextDate: 'May 9', runtime: '48 min', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80', description: 'The story of a thief who becomes a revolutionary, following the growing rebellion against an oppressive empire.' },
  { id: 'slow-horses', title: 'Slow Horses', year: '2022', type: 'Series', genre: 'Spy / Drama', rating: '8.5', status: 'Up next', episodes: 28, next: 'S4 E4', nextDate: 'Mar 11', runtime: '47 min', poster: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80', description: 'A dysfunctional team of MI5 agents are sent to Slough House after career-ending mistakes, where they uncover dangerous conspiracies.' },
  { id: 'arcane', title: 'Arcane', year: '2021', type: 'Series', genre: 'Animation / Fantasy', rating: '9.0', status: 'Completed', episodes: 18, next: 'Completed', nextDate: '', runtime: '41 min', poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80', description: 'Two sisters find themselves on opposing sides of a conflict between the cities of Piltover and Zaun in this animated fantasy drama.' },
  { id: 'shogun', title: 'Shogun', year: '2024', type: 'Series', genre: 'Historical / Drama', rating: '9.1', status: 'Completed', episodes: 10, next: 'Completed', nextDate: '', runtime: '58 min', poster: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80', description: 'In Japan in 1600, Lord Yoshii Toranaga is fighting for his life as his enemies unite against him.' },
  { id: 'dune', title: 'Dune: Part Two', year: '2024', type: 'Movie', genre: 'Sci-fi / Epic', rating: '8.6', status: 'Watchlist', episodes: 1, next: 'Movie', nextDate: '', runtime: '2h 46m', poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80', description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.' },
  { id: 'ripley', title: 'Ripley', year: '2024', type: 'Series', genre: 'Crime / Thriller', rating: '8.1', status: 'Watchlist', episodes: 8, next: 'S1 E1', nextDate: '', runtime: '57 min', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80', description: 'A grifter is hired to travel to Italy and bring home a wealthy man\'s wayward son, launching a life of deceit and danger.' },
  { id: 'fallout', title: 'Fallout', year: '2024', type: 'Series', genre: 'Sci-fi / Adventure', rating: '8.3', status: 'Watchlist', episodes: 8, next: 'S1 E1', nextDate: '', runtime: '58 min', poster: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80', backdrop: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80', description: 'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers.' }
];

let catalog = loadCatalog();
const remoteSearchCache = new Map();
const trailerCache = new Map();
let remoteSearchToken = 0;
let guideAuth = { token: '', endpoint: '' };
let modalScrollY = 0;

window.addEventListener('message', event => {
  if (event.origin !== window.location.origin || event.data?.type !== 'tvgeek-auth') return;
  const convexUrl = String(event.data.convexUrl || '');
  guideAuth = {
    token: String(event.data.token || ''),
    endpoint: convexUrl.replace(/\.convex\.cloud\/?$/, '.convex.site') + '/youtube/trailer'
  };
  if (event.data.profile?.displayName) {
    const profile = currentProfile();
    if (!profile._clerkHydrated || profile.displayName === defaultState.profile.displayName) {
      profile.displayName = event.data.profile.displayName;
      profile.username = event.data.profile.username || profile.username;
      profile.avatar = event.data.profile.avatar || profile.avatar;
      profile._clerkHydrated = true;
      saveState();
    }
  }
});
const upcoming = [
  { date: 'FEB 20', day: '20', title: 'Severance', detail: 'S2 E5 · 44 min', id: 'severance' },
  { date: 'FEB 22', day: '22', title: 'The White Lotus', detail: 'S3 E2 · 59 min', id: 'white-lotus' },
  { date: 'MAR 02', day: '02', title: 'Slow Horses', detail: 'S4 E4 · 47 min', id: 'slow-horses' },
  { date: 'APR 28', day: '28', title: 'The Last of Us', detail: 'S2 E3 · 52 min', id: 'last-of-us' }
];

const SESSION_KEY = 'tvgeek-session';
let authMode = 'signin';
const defaultState = {
  activeView: 'today',
  watched: {},
  watchedEpisodes: {},
  userAddedIds: [],
  lists: [
    { id: 'weekend-queue', name: 'Weekend queue', color: 'amber', showIds: [] },
    { id: 'comfort-rewatches', name: 'Comfort rewatches', color: 'violet', showIds: [] },
    { id: 'movie-night', name: 'Movie night', color: 'blue', showIds: [] }
  ],
  reminders: true,
  ratings: {},
  notes: {},
  activity: [],
  profile: {
    displayName: 'Jordan Davis',
    username: '@jordandavis',
    bio: 'Collecting great stories, one episode at a time.',
    avatar: '',
    favoriteIds: [],
    friends: [
      { id: 'friend-alex', name: 'Alex Morgan', handle: '@alexm', initials: 'AM', status: 'Watching Severance' },
      { id: 'friend-sam', name: 'Sam Rivera', handle: '@samr', initials: 'SR', status: 'Finished Shogun' }
    ],
    activityVisibility: 'friends'
  },
  calendarFilter: 'all',
  calendarMode: 'calendar',
  googleCalendarConnected: false,
  browserNotifications: false
};
let state = loadState();
const appView = document.getElementById('app-view');
const toast = document.getElementById('toast');

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('reelmark-state') || '{}');
    const loaded = { ...defaultState, ...saved, watched: { ...defaultState.watched, ...(saved.watched || {}) }, watchedEpisodes: { ...defaultState.watchedEpisodes, ...(saved.watchedEpisodes || {}) }, lists: Array.isArray(saved.lists) ? saved.lists : defaultState.lists, ratings: { ...defaultState.ratings, ...(saved.ratings || {}) }, notes: { ...defaultState.notes, ...(saved.notes || {}) }, activity: Array.isArray(saved.activity) ? saved.activity : [], profile: { ...defaultState.profile, ...(saved.profile || {}), favoriteIds: Array.isArray(saved.profile?.favoriteIds) ? saved.profile.favoriteIds : defaultState.profile.favoriteIds, friends: Array.isArray(saved.profile?.friends) ? saved.profile.friends : defaultState.profile.friends } };
    // Migration: builds before library management seeded the whole catalog as "watched".
    // Adopt titles the user actually interacted with, and drop progress on the rest.
    if (!Array.isArray(saved.userAddedIds)) {
      const adopted = Object.keys(loaded.watched).filter(id => Number(loaded.watched[id]) > 0);
      loaded.userAddedIds = adopted;
      Object.keys(loaded.watched).forEach(id => { if (!adopted.includes(id)) delete loaded.watched[id]; });
    } else {
      loaded.userAddedIds = saved.userAddedIds;
    }
    return loaded;
  } catch { return { ...defaultState }; }
}
function loadCatalog() {
  try {
    const saved = JSON.parse(localStorage.getItem('reelmark-catalog') || '[]');
    const savedById = new Map(saved.map(show => [show.id, show]));
    return baseCatalog.map(show => ({ ...show, ...(savedById.get(show.id) || {}) })).concat(saved.filter(show => !baseCatalog.some(base => base.id === show.id)));
  } catch { return baseCatalog.map(show => ({ ...show })); }
}
function saveCatalog() { localStorage.setItem('reelmark-catalog', JSON.stringify(catalog)); }
function saveState() { localStorage.setItem('reelmark-state', JSON.stringify(state)); }
function getSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } }
function setSession(session) { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); }
function clearSession() { localStorage.removeItem(SESSION_KEY); }
function showApp() { document.getElementById('auth-gate')?.classList.add('hidden'); document.body.classList.add('authenticated'); }
function showAuth() { document.getElementById('auth-gate')?.classList.remove('hidden'); document.body.classList.remove('authenticated'); }
function authMessage(message, error = false) { const node = document.getElementById('auth-message'); if (node) { node.textContent = message; node.classList.toggle('error', error); } }
function initAuth() {
  const session = getSession();
  const embedded = new URLSearchParams(window.location.search).has('embedded');
  if (embedded) showApp(); else if (session) showApp(); else showAuth();
  document.getElementById('auth-form')?.addEventListener('submit', event => { event.preventDefault(); const email = document.getElementById('auth-email').value.trim().toLowerCase(); const password = document.getElementById('auth-password').value; if (!email || password.length < 6) { authMessage('Enter a valid email and a password with at least 6 characters.', true); return; } const name = email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\\b\\w/g, char => char.toUpperCase()); const profile = currentProfile(); if (authMode === 'signup') { profile.displayName = name || 'TVNerd viewer'; profile.username = `@${email.split('@')[0].replace(/[^a-z0-9]/g, '').slice(0, 20) || 'viewer'}`; saveState(); } setSession({ provider: 'account', email, name: profile.displayName, signedInAt: new Date().toISOString() }); showApp(); updateChrome(); authMessage(''); showToast(authMode === 'signup' ? 'Account created' : 'Signed in'); });
  document.getElementById('auth-mode-button')?.addEventListener('click', () => { authMode = authMode === 'signin' ? 'signup' : 'signin'; const submit = document.getElementById('auth-submit'); const mode = document.getElementById('auth-mode-button'); if (submit) submit.textContent = authMode === 'signup' ? 'Create account' : 'Sign in'; if (mode) mode.textContent = authMode === 'signup' ? 'Already have an account? Sign in' : 'Need an account? Create one'; authMessage(''); });
  document.getElementById('google-auth-button')?.addEventListener('click', () => authMessage('Google sign-in needs a configured OAuth client ID and backend callback. Connect those credentials to enable it.', true));
}
function listForShow(list, showId) { return Boolean(list.showIds?.includes(showId)); }
function renderSidebarLists() {
  const container = document.getElementById('custom-lists');
  if (!container) return;
  container.innerHTML = state.lists.map(list => `<button class="list-item" data-list-id="${escapeHtml(list.id)}" type="button"><span class="list-dot ${escapeHtml(list.color)}"></span>${escapeHtml(list.name)} <span>${list.showIds?.length || 0}</span></button>`).join('');
  container.querySelectorAll('[data-list-id]').forEach(button => button.addEventListener('click', () => navigate(`list:${button.dataset.listId}`)));
}
function createList() {
  const name = window.prompt('Name your new list');
  if (!name?.trim()) return;
  const colors = ['amber', 'violet', 'blue', 'teal'];
  state.lists.push({ id: `list-${Date.now()}`, name: name.trim().slice(0, 32), color: colors[state.lists.length % colors.length], showIds: [] });
  saveState(); renderSidebarLists(); showToast(`${name.trim()} created`);
}
function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2800); }
function todayLabel() { return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }); }
function nextReleaseLabel() { const item = releaseItems()[0]; return item ? `${item.show?.title || 'Upcoming show'} · ${item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : 'No date available'; }
function recordActivity(showId, text) {
  const show = getShow(showId);
  if (!show) return;
  state.activity = [{ id: `${Date.now()}-${showId}`, showId, text, at: new Date().toISOString() }, ...(state.activity || [])].slice(0, 12);
  saveState();
}
function activityTime(value) {
  const minutes = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 60000));
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.round(minutes / 60)}h ago`;
  return `${Math.round(minutes / 1440)}d ago`;
}
function recentActivity() {
  const items = (state.activity || []).filter(item => getShow(item.showId)).slice(0, 4);
  return `<section class="activity-panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><span class="section-meta">Your latest library moves</span></div><span class="hud-live">LIVE LOG</span></div>${items.length ? `<div class="activity-list">${items.map(item => { const show = getShow(item.showId); return `<button class="activity-item" data-show-id="${show.id}" type="button">${poster(show, 'activity-poster')}<span class="activity-copy"><strong>${escapeHtml(show.title)}</strong><span>${escapeHtml(item.text)}</span></span><time>${activityTime(item.at)}</time></button>`; }).join('')}</div>` : '<div class="activity-empty">Your watch actions will appear here.</div>'}</section>`;
}
function getShow(id) { return catalog.find(show => show.id === id); }
function watchedEpisodesFor(show) { const saved = state.watchedEpisodes?.[show.id]; return Array.isArray(saved) ? saved.length : (state.watched[show.id] || 0); }
function progressFor(show) { return show.episodes ? Math.min(100, Math.round((watchedEpisodesFor(show) / show.episodes) * 100)) : 0; }
function watchedCount() { return catalog.reduce((sum, show) => sum + watchedEpisodesFor(show), 0); }
function episodeKey(episode, index) { return String(episode?.id || `${episode?.season || 1}-${episode?.number || index + 1}`); }
function isEpisodeWatched(show, episode, index) { const saved = state.watchedEpisodes?.[show.id]; return Array.isArray(saved) ? saved.includes(episodeKey(episode, index)) : (state.watched[show.id] || 0) >= index + 1; }
function setEpisodeWatched(show, episode, index, checked) {
  if (!Array.isArray(state.watchedEpisodes?.[show.id]) && !show.episodeData) {
    const legacy = state.watched[show.id] || 0;
    state.watched[show.id] = checked ? Math.max(legacy, index + 1) : Math.min(legacy, index);
    saveState();
    return;
  }
  const current = Array.isArray(state.watchedEpisodes?.[show.id]) ? [...state.watchedEpisodes[show.id]] : [];
  const key = episodeKey(episode, index);
  const next = checked ? [...new Set([...current, key])] : current.filter(item => item !== key);
  state.watchedEpisodes[show.id] = next;
  state.watched[show.id] = next.length;
  saveState();
}
function escapeHtml(value) { return String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char])); }
function stripHtml(value) { return String(value || '').replace(/<[^>]*>/g, ''); }
function poster(show, className = 'poster') { return `<img class="${className}" src="${show.poster}" alt="${escapeHtml(show.title)} poster" loading="lazy">`; }
function imdbUrl(show) { return show.imdbId ? `https://www.imdb.com/title/${encodeURIComponent(show.imdbId)}/` : `https://www.imdb.com/find/?q=${encodeURIComponent(show.title)}`; }
function trailerUrl(show) { return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${show.title} ${show.year !== 'Unknown' ? show.year + ' ' : ''}official trailer`)}`; }
function trailerLink(show) { return `<button class="trailer-link" id="modal-trailer-button" type="button" title="Find and play the ${escapeHtml(show.title)} trailer on YouTube"><span class="trailer-icon" aria-hidden="true">▶</span><span>Watch ${escapeHtml(show.title)} trailer</span><span class="external-mark" aria-hidden="true">↗</span></button>`; }
function watchLink(show) { const query = show.type === 'Movie' ? `${show.title} (${show.year}) full movie` : `${show.title} ${show.next || ''} full episode`.replace(/\s+/g, ' ').trim(); const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`; return `<a class="watch-link" href="${url}" target="_blank" rel="noopener noreferrer" data-external-link="youtube" title="Search ${escapeHtml(show.title)} on YouTube to stream it"><span class="watch-icon" aria-hidden="true">▶</span><span>Stream ${show.type === 'Movie' ? 'movie' : 'episode'}</span><span class="external-mark" aria-hidden="true">↗</span></a>`; }
function torrentLink(show, label, host) { const query = show.type === 'Movie' ? `${show.title} ${show.year} 1080p` : `${show.title} ${show.next || ''}`.replace(/\s+/g, ' ').trim(); const href = host === 'ext.to' ? `https://ext.to/browse/?q=${encodeURIComponent(query)}` : `https://psa.wf/?s=${encodeURIComponent(query)}`; return `<a class="watch-link torrent-watch-link" href="${href}" target="_blank" rel="noopener noreferrer" data-external-link="${host}" title="Search ${escapeHtml(show.title)} on ${label}"><span class="watch-icon ${host === 'ext.to' ? 'ext-icon' : 'psa-icon'}" aria-hidden="true">⇣</span><span>${label}</span><span class="external-mark" aria-hidden="true">↗</span></a>`; }
function trailerPanelMarkup() { return '<section class="trailer-panel" id="modal-trailer-panel" hidden aria-live="polite"></section>'; }
function renderTrailerFallback(show, message = 'Trailer playback is unavailable right now.') { const panel = document.getElementById('modal-trailer-panel'); if (!panel) return; panel.hidden = false; panel.innerHTML = `<div class="trailer-fallback"><span>${escapeHtml(message)}</span><a class="trailer-search-link" href="${trailerUrl(show)}" target="_blank" rel="noopener noreferrer">Search YouTube for this trailer ↗</a></div>`; }
function renderTrailer(show, trailer) { const panel = document.getElementById('modal-trailer-panel'); if (!panel) return; if (!trailer?.videoId) { renderTrailerFallback(show, 'No embeddable trailer was found for this title.'); return; } panel.hidden = false; panel.innerHTML = `<div class="trailer-player-wrap"><iframe class="trailer-player" src="${escapeHtml(trailer.embedUrl)}" title="${escapeHtml(trailer.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="trailer-info"><div><strong>${escapeHtml(trailer.title)}</strong><span>${escapeHtml(trailer.channelTitle)}${trailer.duration ? ` · ${escapeHtml(trailer.duration)}` : ''}</span></div><a class="trailer-search-link" href="${escapeHtml(trailer.watchUrl)}" target="_blank" rel="noopener noreferrer">Open on YouTube ↗</a></div>`; }
async function loadTrailer(show) {
  const panel = document.getElementById('modal-trailer-panel');
  if (!panel) return;
  panel.hidden = false;
  panel.innerHTML = '<div class="trailer-loading"><span class="loading-pulse"></span>Finding the best trailer...</div>';
  if (trailerCache.has(show.id)) { renderTrailer(show, trailerCache.get(show.id)); return; }
  if (!guideAuth.token || !guideAuth.endpoint) { renderTrailerFallback(show, 'Trailer search is not connected for this session.'); return; }
  try {
    const response = await fetch(guideAuth.endpoint, { method: 'POST', headers: { Authorization: `Bearer ${guideAuth.token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ title: show.title, year: show.year, type: show.type }) });
    if (!response.ok) throw new Error('Trailer lookup failed');
    const data = await response.json();
    trailerCache.set(show.id, data.trailer || null);
    renderTrailer(show, data.trailer);
  } catch { renderTrailerFallback(show); }
}
function imdbLink(show, compact = false) { return `<a class="imdb-link ${compact ? 'compact' : ''}" href="${imdbUrl(show)}" target="_blank" rel="noopener noreferrer" data-external-link="imdb" title="Open ${escapeHtml(show.title)} on IMDb"><b>IMDb</b>${compact ? '' : '<span>Open title page ↗</span>'}</a>`; }
function coverCard(show, badge = '') { return `<article class="cover-card" data-show-id="${show.id}"><div class="cover-image-wrap">${poster(show, 'cover-image')}${badge ? `<span class="cover-badge">${badge}</span>` : ''}</div><div class="cover-title">${escapeHtml(show.title)}</div><div class="cover-meta">${escapeHtml(show.genre)} · ${show.rating || 'N/A'}</div></article>`; }
function isUserAdded(showId) { return state.userAddedIds.includes(showId); }
function libraryCard(show, manage = true) { const personalRating = state.ratings[show.id]; return `<article class="library-card ${manage ? 'manageable' : ''}" data-show-id="${show.id}">${manage ? `<button class="card-menu-button" data-menu-toggle="${show.id}" type="button" aria-label="Manage ${escapeHtml(show.title)}" aria-haspopup="true">⋯</button><div class="card-menu" data-menu="${show.id}" hidden><button data-lib-action="watchlist" type="button">${show.status === 'Watchlist' ? '✓ On watchlist' : '+ Add to watchlist'}</button><button data-lib-action="favorite" type="button">${currentProfile().favoriteIds.includes(show.id) ? '★ In favorites' : '☆ Add to favorites'}</button><button data-lib-action="remove" type="button" class="danger">− Remove from library</button><button data-lib-action="delete" type="button" class="danger">🗑 Delete title</button></div>` : ''}<div class="cover-image-wrap">${poster(show, 'cover-image')}<span class="cover-badge">${show.type}</span><span class="card-imdb">IMDb</span></div><div class="cover-title">${escapeHtml(show.title)}</div><div class="cover-meta">${escapeHtml(show.year)} · ${show.rating || 'N/A'}${personalRating ? ` · <b class="personal-rating">★ ${personalRating}/5</b>` : ''}</div><span class="status-chip">${show.status === 'Completed' ? 'Completed' : `${progressFor(show)}% watched`}</span></article>`; }
function addToLibrary(id, opts = {}) { const show = getShow(id); if (!show) return; if (!isUserAdded(id)) state.userAddedIds.push(id); show.status = opts.status || show.status || 'Watchlist'; state.watched[id] = state.watched[id] || 0; saveState(); saveCatalog(); recordActivity(id, 'Added to library'); showToast(`${show.title} added to your library`); }
function purgeShowData(id) { delete state.watched[id]; delete state.watchedEpisodes[id]; delete state.ratings[id]; delete state.notes[id]; state.lists.forEach(list => { list.showIds = (list.showIds || []).filter(item => item !== id); }); const profile = currentProfile(); profile.favoriteIds = profile.favoriteIds.filter(item => item !== id); }
function removeFromLibrary(id) { if (!isUserAdded(id)) return; state.userAddedIds = state.userAddedIds.filter(item => item !== id); purgeShowData(id); const show = getShow(id); saveState(); saveCatalog(); renderSidebarLists(); render(); showToast(`${show?.title || 'Title'} removed from your library`); }
function deleteTitle(id) { const show = getShow(id); if (!window.confirm(`Delete "${show?.title || 'this title'}" from TVNerd? This removes it from your library, lists, ratings, notes, and watch history.`)) return; state.userAddedIds = state.userAddedIds.filter(item => item !== id); purgeShowData(id); if (!baseCatalog.some(base => base.id === id)) catalog = catalog.filter(show => show.id !== id); saveState(); saveCatalog(); renderSidebarLists(); render(); closeModal(); showToast(`${show?.title || 'Title'} deleted`); }
function episodeRow(show, index) { const watched = watchedEpisodesFor(show) >= index; return `<div class="episode-row" data-episode-show="${show.id}" data-episode-index="${index}">${poster(show)}<div class="episode-info"><div class="episode-show">${escapeHtml(show.title)}</div><div class="episode-name">${show.next} · ${index === 13 ? 'The After Hours' : index === 15 ? 'The Field Trip' : index === 10 ? 'Feel Good' : 'Episode ' + index}</div><div class="episode-meta">${show.nextDate ? `Expected ${show.nextDate}` : show.runtime} · ${escapeHtml(show.genre)}</div><div class="progress-track"><div class="progress-fill" style="width:${progressFor(show)}%"></div></div></div><div class="episode-actions"><button class="watch-button ${watched ? 'watched' : ''}" data-watch-id="${show.id}" data-watch-index="${index}" title="${watched ? 'Mark unwatched' : 'Mark watched'}" type="button">${watched ? '&#10003;' : '&#9654;'}</button><button class="more-button" data-show-id="${show.id}" title="More details" type="button">...</button></div></div>`; }
function averageProgress() { return catalog.length ? Math.round(catalog.reduce((sum, show) => sum + progressFor(show), 0) / catalog.length) : 0; }
function genreSummary() { const counts = new Map(); catalog.forEach(show => { const genre = (show.genre || 'Other').split('/')[0].trim(); counts.set(genre, (counts.get(genre) || 0) + 1); }); return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4); }
function premiumHud() { const minutes = catalog.reduce((sum, show) => sum + watchedEpisodesFor(show) * (parseInt(show.runtime, 10) || 45), 0); const genres = genreSummary(); return `<section class="premium-hud"><div class="hud-header"><div><div class="eyebrow">Your watch pulse</div><h2 class="section-title">A quick read on your viewing life</h2></div><span class="hud-live"><i></i> LOCAL HUD</span></div><div class="hud-grid"><div class="hud-metric"><span>Library completion</span><strong>${averageProgress()}%</strong><div class="hud-bar"><i style="width:${averageProgress()}%"></i></div></div><div class="hud-metric"><span>Minutes logged</span><strong>${minutes.toLocaleString()}</strong><small>Estimated from episode runtimes</small></div><div class="hud-metric"><span>Top lanes</span><strong>${genres[0]?.[0] || 'Explore'}</strong><small>${genres.slice(0, 3).map(item => `${escapeHtml(item[0])} ${item[1]}`).join(' · ')}</small></div><div class="hud-metric"><span>Next up</span><strong>${escapeHtml(nextReleaseLabel().split(' · ')[0])}</strong><small>${releaseItems()[0] ? releaseItems()[0].date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'No release dates yet'}</small></div></div></section>`; }

function miniCalendar() {
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth(), 1);
  const offset = (first.getDay() + 6) % 7;
  const days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const releases = releaseItems();
  const releaseDays = new Set(releases.filter(item => item.date.getFullYear() === now.getFullYear() && item.date.getMonth() === now.getMonth()).map(item => item.date.getDate()));
  const cells = Array.from({ length: 42 }, (_, index) => index - offset + 1);
  return `<div class="calendar-head"><span>${now.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span><span class="calendar-month">${releases.length} releases</span></div><div class="calendar-grid"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>${cells.map(day => `<span class="day ${day < 1 || day > days ? 'muted-day' : ''} ${day === now.getDate() ? 'today' : ''} ${releaseDays.has(day) ? 'has-show' : ''}">${day < 1 ? new Date(now.getFullYear(), now.getMonth(), day).getDate() : day > days ? day - days : day}</span>`).join('')}</div>`;
}
function releaseItems() {
  const live = catalog.flatMap(show => (show.episodeData || []).filter(episode => episode.airdate).map(episode => ({ show, episode, date: new Date(`${episode.airdate}T${episode.airtime || '00:00:00'}`) }))).filter(item => !Number.isNaN(item.date.getTime()) && item.date >= new Date()).sort((a, b) => a.date - b.date).slice(0, 12);
  if (live.length) return live;
  return upcoming.map((item, index) => ({ show: getShow(item.id), episode: { name: item.detail, season: item.detail.match(/S(\d+)/)?.[1], number: item.detail.match(/E(\d+)/)?.[1] }, date: new Date(Date.now() + (index * 4 + 2) * 86400000) }));
}
function miniUpcoming(item) { const release = item.episode ? `${item.episode.season ? `S${item.episode.season} E${item.episode.number}` : item.episode.name || 'New episode'}${item.episode.runtime ? ` · ${item.episode.runtime} min` : ''}` : item.detail; return `<button class="mini-item" data-show-id="${item.show?.id || item.id}" type="button"><div class="mini-date"><strong>${item.date.getDate()}</strong>${item.date.toLocaleString('en-US', { month: 'short' }).toUpperCase()}</div><div class="mini-copy"><strong>${escapeHtml(item.show?.title || item.title)}</strong><span>${escapeHtml(release)}</span></div></button>`; }
function streamCard(show, badge = '') { if (!show) return ''; return `<article class="stream-card" data-show-id="${escapeHtml(show.id)}"><div class="stream-card-art">${poster(show, 'stream-card-image')}${badge ? `<span class="stream-badge">${escapeHtml(badge)}</span>` : ''}<span class="stream-card-rating">★ ${escapeHtml(show.rating || 'N/A')}</span><span class="stream-card-play">▶</span></div><div class="stream-card-title">${escapeHtml(show.title)}</div><div class="stream-card-meta">${escapeHtml(show.year)} · ${escapeHtml(show.type)} · ${escapeHtml((show.genre || '').split('/')[0].trim())}</div></article>`; }
function continueCard(show) { if (!show) return ''; const progress = progressFor(show); return `<article class="continue-card" data-show-id="${escapeHtml(show.id)}"><div class="continue-art">${poster(show, 'continue-image')}<div class="continue-shade"></div><span class="continue-play">▶</span><span class="continue-progress"><i style="width:${progress}%"></i></span></div><div class="continue-copy"><strong>${escapeHtml(show.title)}</strong><span>${escapeHtml(show.next || 'Continue watching')} · ${progress}% complete</span></div></article>`; }
function titleCase(value) { return String(value || '').replace(/\b\w/g, char => char.toUpperCase()); }
function buildTasteProfile() {
  const lanes = new Map();
  const addLane = (raw, weight) => (raw || '').split('/').map(lane => lane.trim().toLowerCase()).filter(Boolean).forEach(lane => lanes.set(lane, (lanes.get(lane) || 0) + weight));
  const anchors = [];
  const recent = new Map((state.activity || []).map(entry => [entry.showId, entry.at]));
  catalog.forEach(show => {
    const watched = watchedEpisodesFor(show);
    const rating = Number(state.ratings[show.id]) || 0;
    const favorite = currentProfile().favoriteIds.includes(show.id);
    const lastSeen = recent.get(show.id);
    const recency = lastSeen ? Math.max(0.5, 1.5 - (Date.now() - new Date(lastSeen).getTime()) / (14 * 86400000)) : 0.8;
    if (watched > 0) {
      const weight = (1 + Math.min(4, watched / 4)) * recency;
      addLane(show.genre, weight);
      anchors.push({ show, signal: weight * 2, reason: `You've watched ${watched} episodes of ${show.title}` });
    }
    if (rating >= 4) { addLane(show.genre, 3 + rating); anchors.push({ show, signal: 5 + rating, reason: `You rated ${show.title} ${rating}/5` }); }
    if (rating >= 1 && rating <= 2) addLane(show.genre, -4);
    if (favorite) { addLane(show.genre, 6); anchors.push({ show, signal: 10, reason: `${show.title} is a favorite` }); }
    if (show.status === 'Completed') addLane(show.genre, 2);
  });
  const genres = [...lanes.entries()].filter(([, weight]) => weight > 0).sort((a, b) => b[1] - a[1]);
  return { genres, top: genres.slice(0, 3).map(([lane]) => lane), anchors: anchors.sort((a, b) => b.signal - a.signal) };
}
function recommendationScore(show, profile) {
  const genre = (show.genre || '').toLowerCase();
  let score = Number(show.rating) || 0;
  profile.genres.forEach(([lane, weight]) => { if (genre.includes(lane)) score += weight * 1.5; });
  if (currentProfile().favoriteIds.includes(show.id)) score += 8;
  if (Number(state.ratings[show.id]) >= 4) score += 6;
  if (Number(state.ratings[show.id]) >= 1 && Number(state.ratings[show.id]) <= 2) score -= 10;
  if (show.status === 'Watchlist') score += 4;
  if (show.status === 'Up next') score += 2;
  if (show.status === 'Completed') score -= 3;
  if (show.status === 'Watching') score -= 5;
  const anchor = profile.anchors[0];
  if (anchor && anchor.show.id !== show.id) {
    const anchorGenre = (anchor.show.genre || '').split('/')[0].trim().toLowerCase();
    if (anchorGenre && genre.includes(anchorGenre)) score += 3;
  }
  return score;
}
function recommendationRails() {
  const profile = buildTasteProfile();
  const used = new Set(catalog.filter(show => show.status === 'Watching').map(show => show.id));
  const rails = [];
  const pick = (filter, limit) => catalog.filter(show => !used.has(show.id) && show.status !== 'Watching' && filter(show)).sort((a, b) => recommendationScore(b, profile) - recommendationScore(a, profile)).slice(0, limit);
  if (profile.top[0]) {
    const lane = profile.top[0];
    const picks = pick(show => (show.genre || '').toLowerCase().includes(lane), 8);
    if (picks.length) { picks.forEach(show => used.add(show.id)); rails.push({ title: `Because you love ${titleCase(lane)}`, sub: `Your top lane from ${profile.anchors.length} watched titles`, cards: picks, badge: `BECAUSE: ${lane.toUpperCase()}` }); }
  }
  const anchor = profile.anchors.find(item => item.show.status !== 'Watching');
  if (anchor) {
    const primary = (anchor.show.genre || '').split('/')[0].trim().toLowerCase();
    const picks = pick(show => show.id !== anchor.show.id && (show.genre || '').toLowerCase().includes(primary), 8);
    if (picks.length) { picks.forEach(show => used.add(show.id)); rails.push({ title: `More like ${anchor.show.title}`, sub: anchor.reason, cards: picks, badge: `LIKE ${anchor.show.title.split(' ')[0].toUpperCase()}` }); }
  }
  const fresh = pick(() => true, 8);
  if (fresh.length) rails.push({ title: 'Fresh picks for you', sub: 'Scored across your ratings, favorites, and watch history', cards: fresh, badge: 'FRESH PICK' });
  return { rails, profile };
}
function profileFirstName() { return (currentProfile().displayName || 'there').trim().split(/\\s+/)[0] || 'there'; }
function renderToday() {
  const profile = currentProfile();
  const mine = show => isUserAdded(show.id);
  const watching = catalog.filter(show => mine(show) && show.status === 'Watching').sort((a, b) => progressFor(b) - progressFor(a));
  const watchlist = catalog.filter(show => mine(show) && show.status === 'Watchlist');
  const { rails, profile: taste } = recommendationRails();
  const releases = releaseItems();
  const hero = watching[0] || watchlist[0] || rails[0]?.cards[0] || catalog[0];
  const greeting = new Date().getHours() < 12 ? 'Good morning' : new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening';
  const anchor = taste.anchors[0];
  const heroKicker = watching.length ? `Picked because you're watching ${watching[0].title}` : anchor ? `Because ${anchor.reason.charAt(0).toLowerCase() + anchor.reason.slice(1)}` : 'Your next great story is ready.';
  const tasteTotal = taste.genres.reduce((sum, [, weight]) => sum + weight, 0) || 1;
  const tasteChips = taste.genres.slice(0, 3).map(([lane, weight]) => `<span class="taste-chip"><b>${escapeHtml(titleCase(lane))}</b><i>${Math.round((weight / tasteTotal) * 100)}%</i></span>`).join('');
  const personalRails = rails.length ? rails.map(rail => `<section class="stream-section"><div class="stream-section-head"><div><h2>${escapeHtml(rail.title)}</h2><span>${escapeHtml(rail.sub)}</span></div><button class="stream-link" data-nav="discover" type="button">More like this →</button></div><div class="stream-rail">${rail.cards.map(show => streamCard(show, rail.badge)).join('')}</div></section>`).join('') : `<section class="stream-section"><div class="stream-empty"><strong>Your personal rails will appear here.</strong><span>Watch episodes, rate titles, or mark favorites and TVNerd shapes the home around your taste.</span><button class="button primary" data-nav="search" type="button">Find a title</button></div></section>`;
  appView.innerHTML = `<div class="stream-home"><section class="stream-hero" style="--hero-image:url('${escapeHtml(hero?.backdrop || hero?.poster || '')}')"><div class="stream-hero-shade"></div><div class="stream-hero-content"><span class="eyebrow">${todayLabel()} · PERSONALIZED FOR ${escapeHtml(profileFirstName().toUpperCase())}</span><h1>${greeting}, ${escapeHtml(profileFirstName())}.</h1><p class="stream-hero-kicker">${escapeHtml(heroKicker)}</p><h2>${escapeHtml(hero?.title || 'Build your watch life')}</h2><p class="stream-hero-description">${escapeHtml(hero?.description || 'Add a show or movie and TVNerd will shape your personal streaming hub around it.')}</p><div class="stream-hero-actions"><button class="button primary" data-show-id="${escapeHtml(hero?.id || '')}" type="button">▶ ${hero && hero.status === 'Watching' ? 'Continue watching' : 'Open title'}</button><button class="button glass-button" data-nav="discover" type="button">Browse for you</button></div><div class="stream-hero-meta"><span>★ ${escapeHtml(hero?.rating || '—')}</span><span>${escapeHtml(hero?.year || '')}</span><span>${escapeHtml(hero?.type || 'TV & Movies')}</span><span>${escapeHtml(hero?.genre || 'Personalized')}</span></div></div><div class="hero-dots" aria-hidden="true"><i class="active"></i><i></i><i></i></div></section><div class="stream-welcome-row"><div><span class="eyebrow">YOUR HOME SCREEN</span><h2>Made for your mood</h2><p>${watching.length ? `${watching.length} titles are in progress and ${watchlist.length} are waiting in your list.` : 'Start watching to unlock sharper recommendations.'}</p>${tasteChips ? `<div class="taste-chips">${tasteChips}</div>` : ''}</div><div class="stream-quick-actions"><button class="button" id="add-show-button" type="button">+ Add title</button><button class="button" data-nav="calendar" type="button">TV Guide <span>→</span></button></div></div><section class="stream-section"><div class="stream-section-head"><div><h2>Continue watching</h2><span>Pick up exactly where you left off</span></div><button class="stream-link" data-nav="shows" type="button">See all →</button></div><div class="continue-rail">${watching.length ? watching.map(continueCard).join('') : `<div class="stream-empty"><strong>Your next episode is waiting.</strong><span>Add something to your library to start your personal rail.</span><button class="button primary" data-nav="search" type="button">Find a title</button></div>`}</div></section>${personalRails}<section class="stream-section"><div class="stream-section-head"><div><h2>My watchlist</h2><span>Titles you saved for later</span></div><button class="stream-link" data-nav="shows" type="button">Manage list →</button></div><div class="stream-rail">${(watchlist.length ? watchlist : (rails[0]?.cards || [])).slice(0, 8).map(show => streamCard(show, watchlist.includes(show) ? 'WATCHLIST' : 'SUGGESTED')).join('')}</div></section><section class="stream-section guide-rail-section"><div class="stream-section-head"><div><h2>Coming up on your guide</h2><span>Never miss the next episode</span></div><button class="stream-link" data-nav="calendar" type="button">Open TV Guide →</button></div><div class="release-rail">${releases.slice(0, 5).map(item => `<button class="release-card" data-show-id="${escapeHtml(item.show?.id || '')}" type="button"><span class="release-date"><b>${item.date.getDate()}</b>${item.date.toLocaleString('en-US', { month: 'short' }).toUpperCase()}</span>${poster(item.show, 'release-poster')}<span class="release-copy"><strong>${escapeHtml(item.show?.title || 'Upcoming release')}</strong><small>${escapeHtml(item.episode?.name || `S${item.episode?.season || 1} E${item.episode?.number || 1}`)}</small><em>${item.show?.type || 'Series'} · ${item.show?.runtime || 'Runtime TBA'}</em></span><span class="release-arrow">→</span></button>`).join('')}</div></section></div>`;
  bindViewEvents();
}
function renderShows() { const library = catalog.filter(show => isUserAdded(show.id)); const myProgress = library.length ? Math.round(library.reduce((sum, show) => sum + progressFor(show), 0) / library.length) : 0; appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Your library</div><h1 class="page-title">My shows</h1><p class="page-subtitle">Everything you are watching, queued, or have finished.</p></div><div class="head-actions"><button class="button" id="import-button" type="button"><span class="button-icon">↑</span>Import</button><button class="button primary" id="add-show-button" type="button"><span class="button-icon">+</span>Add a show</button></div></div><div class="library-toolbar"><label class="filter-search"><span class="search-icon" aria-hidden="true"></span><input id="library-search" type="search" placeholder="Filter your library..."></label><select id="library-status-filter" aria-label="Filter by status"><option value="all">Every status</option><option value="Watching">Watching</option><option value="Watchlist">Watchlist</option><option value="Completed">Completed</option></select><select id="library-type-filter" aria-label="Filter by type"><option value="all">Shows and movies</option><option value="Series">Series</option><option value="Movie">Movies</option></select><button class="button" id="library-manage-button" type="button">☑ Manage</button></div><div class="section-header"><h2 class="section-title">All titles <span class="section-meta">${library.length} in your library</span></h2><span class="source-label">${library.length ? `${myProgress}% library completion` : 'Your library is empty'}</span></div>${library.length ? `<div class="library-grid" id="library-grid">${library.map(show => libraryCard(show, true)).join('')}</div>` : `<div class="empty-state library-empty"><strong>Your library is empty</strong><span>Add shows and movies to track them, then manage them all right here.</span><div class="empty-actions"><button class="button primary" data-nav="search" type="button">+ Find a title</button><button class="button" data-nav="discover" type="button">Browse ideas</button></div></div>`}<div class="library-selection-bar" id="library-selection-bar" hidden><span id="library-selected-count">0 selected</span><button class="button" id="library-selection-remove" type="button">Remove selected</button><button class="button danger-button" id="library-selection-delete" type="button">Delete selected</button><button class="button" id="library-selection-cancel" type="button">Cancel</button></div>`; bindViewEvents(); bindLibraryFilters(); }
function currentProfile() { return state.profile || defaultState.profile; }
function avatarMarkup(profile, className = 'profile-avatar') { return profile.avatar ? `<img class="${className}" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.displayName)} profile picture">` : `<span class="${className} profile-initials">${escapeHtml((profile.displayName || 'JD').split(/\\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase())}</span>`; }
function updateChrome() {
  const profile = currentProfile();
  const sidebar = document.querySelector('#profile-button');
  const mobile = document.querySelector('#mobile-profile-button');
  if (sidebar) sidebar.innerHTML = `${avatarMarkup(profile, 'avatar')}<span><strong>${escapeHtml(profile.displayName)}</strong><small>${escapeHtml(profile.username || 'Local account')}</small></span><span class="chevron" aria-hidden="true">›</span>`;
  if (mobile) { mobile.innerHTML = avatarMarkup(profile, 'avatar top-avatar-image'); mobile.setAttribute('aria-label', `${profile.displayName} profile`); }
  const heading = document.querySelector('.page-title');
  if (heading && state.activeView === 'today') { const greeting = document.querySelector('.page-head h1'); if (greeting) greeting.textContent = `Good evening, ${profile.displayName.split(' ')[0] || 'there'}.`; }
}
function favoriteButton(show) { const active = currentProfile().favoriteIds.includes(show.id); return `<button class="favorite-button ${active ? 'active' : ''}" id="modal-favorite-button" type="button" aria-label="${active ? 'Remove from favorites' : 'Add to favorites'}" title="${active ? 'Remove from favorites' : 'Add to favorites'}">${active ? '★' : '☆'}</button>`; }
function shareTextForShow(show) { return `${show.title} (${show.year}) is on my TVNerd watchlist.`; }
function googleCalendarUrl(item) { const start = item.date.toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, ''); const end = new Date(item.date.getTime() + 60 * 60000).toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, ''); const title = `${item.show.title} · ${item.episode.name || `S${item.episode.season} E${item.episode.number}`}`; return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent('Added from TVNerd — Stream & TV Hub — Your Digital Nerd At Your Service')}`; }
function downloadCalendarFile(items) { const rows = items.map(item => { const start = item.date.toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, ''); const end = new Date(item.date.getTime() + 60 * 60000).toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, ''); return `BEGIN:VEVENT\\nUID:${item.show.id}-${item.date.getTime()}@tvnerd.app\\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\\.\\d{3}/, '')}\\nDTSTART:${start}\\nDTEND:${end}\\nSUMMARY:${item.show.title} - ${item.episode.name || 'New episode'}\\nDESCRIPTION:TVNerd release reminder\\nEND:VEVENT`; }).join('\\n'); const blob = new Blob([`BEGIN:VCALENDAR\\nVERSION:2.0\\nPRODID:-//TVNerd//TV Guide//EN\\n${rows}\\nEND:VCALENDAR`], { type: 'text/calendar' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'tvnerd-upcoming.ics'; link.click(); URL.revokeObjectURL(link.href); showToast('Calendar file downloaded'); }
async function shareText(text, title = 'TVNerd') {
  try { if (navigator.share) { await navigator.share({ title, text }); showToast('Share sheet opened'); return; } if (navigator.clipboard) { await navigator.clipboard.writeText(text); showToast('Share text copied'); return; } } catch { return; }
  window.prompt('Copy this share text', text);
}
function profileStats() { const watched = watchedCount(); const completed = catalog.filter(show => show.status === 'Completed').length; const favorites = currentProfile().favoriteIds.filter(id => getShow(id)).length; return { watched, completed, favorites }; }
function renderAgenda(items) { return items.length ? `<div class="agenda-list">${items.map(item => `<button class="agenda-item" data-show-id="${item.show.id}" type="button"><span class="agenda-date"><strong>${item.date.toLocaleDateString('en-US', { weekday: 'short' })}</strong><b>${item.date.getDate()}</b><small>${item.date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</small></span><span class="agenda-poster">${poster(item.show, 'agenda-image')}</span><span class="agenda-copy"><strong>${escapeHtml(item.show.title)}</strong><span>${escapeHtml(item.episode.name || `S${item.episode.season} E${item.episode.number}`)}</span><small>${item.show.type} · ${item.show.runtime || 'Runtime TBA'}</small></span><span class="agenda-arrow">›</span></button>`).join('')}</div>` : '<div class="empty-state">No releases match this filter yet.</div>'; }
function filteredReleases() { const filter = state.calendarFilter || 'all'; return releaseItems().filter(item => filter === 'all' || (filter === 'favorites' ? currentProfile().favoriteIds.includes(item.show.id) : item.show.type === filter)); }
function renderCalendarGuide() {
  const now = new Date();
  const releases = filteredReleases();
  const year = now.getFullYear(); const month = now.getMonth(); const first = new Date(year, month, 1); const startOffset = (first.getDay() + 6) % 7; const daysInMonth = new Date(year, month + 1, 0).getDate();
  const releaseByDay = new Map();
  releases.filter(item => item.date.getFullYear() === year && item.date.getMonth() === month).forEach(item => { const day = item.date.getDate(); releaseByDay.set(day, [...(releaseByDay.get(day) || []), item]); });
  const cells = Array.from({ length: Math.ceil((startOffset + daysInMonth) / 7) * 7 }, (_, index) => index - startOffset + 1);
  const mode = state.calendarMode || 'calendar';
  const calendarReleaseCard = item => { const show = item.show; const episodeLabel = item.episode ? (item.episode.season ? `S${item.episode.season} E${item.episode.number}` : (item.episode.name || item.detail || 'New release')) : (item.detail || 'New release'); return `<button class="calendar-release-card" data-show-id="${escapeHtml(show.id)}" type="button" title="Open ${escapeHtml(show.title)} details">${poster(show, 'calendar-release-poster')}<span class="calendar-release-copy"><strong>${escapeHtml(show.title)}</strong><small>${escapeHtml(episodeLabel)}</small></span></button>`; };
  appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">TV guide and premieres</div><h1 class="page-title">Release guide</h1><p class="page-subtitle">Track premieres, new episodes, movies, and the titles you marked as favorites.</p></div><div class="head-actions"><button class="button ${mode === 'calendar' ? 'primary' : ''}" id="calendar-mode-button" type="button">Calendar</button><button class="button ${mode === 'agenda' ? 'primary' : ''}" id="agenda-mode-button" type="button">Agenda</button><button class="button" id="export-calendar-button" type="button">Export .ics</button>${releases[0] ? `<button class="button google-guide-button" id="google-next-button" type="button">Add next to Google</button>` : ''}</div></div><div class="guide-toolbar"><div class="guide-filters" role="group" aria-label="Release filters"><button class="guide-filter ${state.calendarFilter === 'all' ? 'active' : ''}" data-calendar-filter="all" type="button">All releases</button><button class="guide-filter ${state.calendarFilter === 'Series' ? 'active' : ''}" data-calendar-filter="Series" type="button">Series</button><button class="guide-filter ${state.calendarFilter === 'Movie' ? 'active' : ''}" data-calendar-filter="Movie" type="button">Movies</button><button class="guide-filter ${state.calendarFilter === 'favorites' ? 'active' : ''}" data-calendar-filter="favorites" type="button">★ Favorites</button></div><span class="source-label">${releases.length} upcoming</span></div>${mode === 'agenda' ? renderAgenda(releases) : `<section class="calendar-page"><div class="large-calendar"><div class="large-calendar-header"><div><h2 class="section-title">${now.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2><span class="section-meta">${releases.length} upcoming releases found</span></div></div><div class="large-calendar-grid"><div class="weekday">Mon</div><div class="weekday">Tue</div><div class="weekday">Wed</div><div class="weekday">Thu</div><div class="weekday">Fri</div><div class="weekday">Sat</div><div class="weekday">Sun</div>${cells.map(day => { const items = releaseByDay.get(day) || []; const cards = items.slice(0, 3).map(calendarReleaseCard).join(''); const more = items.length > 3 ? `<span class="calendar-more">+${items.length - 3} more</span>` : ''; return `<div class="calendar-cell ${day < 1 || day > daysInMonth ? 'calendar-outside' : ''}"><span class="calendar-number ${day === now.getDate() ? 'today-number' : ''}">${day < 1 ? new Date(year, month, day).getDate() : day > daysInMonth ? day - daysInMonth : day}</span>${cards}${more}</div>`; }).join('')}</div></div><div class="panel release-list-panel"><div class="panel-header"><h2 class="panel-title">Upcoming releases</h2><span class="section-meta">Next ${Math.min(releases.length, 8)}</span></div><div class="upcoming-mini">${releases.slice(0, 8).map(miniUpcoming).join('') || '<div class="empty-state">No upcoming dates available yet.</div>'}</div></div></section>`}`;
  document.querySelectorAll('[data-calendar-filter]').forEach(button => button.addEventListener('click', () => { state.calendarFilter = button.dataset.calendarFilter; saveState(); renderCalendarGuide(); }));
  document.getElementById('calendar-mode-button').addEventListener('click', () => { state.calendarMode = 'calendar'; saveState(); renderCalendarGuide(); });
  document.getElementById('agenda-mode-button').addEventListener('click', () => { state.calendarMode = 'agenda'; saveState(); renderCalendarGuide(); });
  document.getElementById('export-calendar-button').addEventListener('click', () => downloadCalendarFile(releases));
  document.getElementById('google-next-button')?.addEventListener('click', () => { const next = releases[0]; if (next) window.open(googleCalendarUrl(next), '_blank', 'noopener,noreferrer'); });
  const nextRelease = releases[0];
  if (nextRelease) { document.querySelectorAll('.agenda-item, .calendar-event, .mini-item').forEach(element => { if (!element.dataset.showId || element.dataset.showId !== nextRelease.show.id) return; }); }
  bindViewEvents();
}
function renderCalendar() { renderCalendarGuide(); }
function renderCalendarLegacy() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const releases = releaseItems();
  const releaseByDay = new Map();
  releases.filter(item => item.date.getFullYear() === year && item.date.getMonth() === month).forEach(item => { const day = item.date.getDate(); releaseByDay.set(day, [...(releaseByDay.get(day) || []), item]); });
  const cells = Array.from({ length: Math.ceil((startOffset + daysInMonth) / 7) * 7 }, (_, index) => index - startOffset + 1);
  const calendarReleaseCard = item => { const show = item.show; const episodeLabel = item.episode ? (item.episode.season ? `S${item.episode.season} E${item.episode.number}` : (item.episode.name || item.detail || 'New release')) : (item.detail || 'New release'); return `<button class="calendar-release-card" data-show-id="${escapeHtml(show.id)}" type="button" title="Open ${escapeHtml(show.title)} details">${poster(show, 'calendar-release-poster')}<span class="calendar-release-copy"><strong>${escapeHtml(show.title)}</strong><small>${escapeHtml(episodeLabel)}</small></span></button>`; };
  appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Upcoming episodes</div><h1 class="page-title">Release calendar</h1><p class="page-subtitle">Dates are populated from available episode metadata and your followed titles.</p></div><div class="head-actions"><button class="button" id="reminder-button" type="button">${state.reminders ? 'Reminders on' : 'Reminders off'}</button></div></div><section class="calendar-page"><div class="large-calendar"><div class="large-calendar-header"><div><h2 class="section-title">${now.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2><span class="section-meta">${releases.length} upcoming releases found</span></div></div><div class="large-calendar-grid"><div class="weekday">Mon</div><div class="weekday">Tue</div><div class="weekday">Wed</div><div class="weekday">Thu</div><div class="weekday">Fri</div><div class="weekday">Sat</div><div class="weekday">Sun</div>${cells.map(day => { const items = releaseByDay.get(day) || []; const cards = items.slice(0, 3).map(calendarReleaseCard).join(''); const more = items.length > 3 ? `<span class="calendar-more">+${items.length - 3} more</span>` : ''; return `<div class="calendar-cell ${day < 1 || day > daysInMonth ? 'calendar-outside' : ''}"><span class="calendar-number ${day === now.getDate() ? 'today-number' : ''}">${day < 1 ? new Date(year, month, day).getDate() : day > daysInMonth ? day - daysInMonth : day}</span>${cards}${more}</div>`; }).join('')}</div></div><div class="panel release-list-panel"><div class="panel-header"><h2 class="panel-title">Upcoming releases</h2><span class="section-meta">Next ${Math.min(releases.length, 8)}</span></div><div class="upcoming-mini">${releases.slice(0, 8).map(miniUpcoming).join('') || '<div class="empty-state">No upcoming dates available yet.</div>'}</div></div></section>`; bindViewEvents(); }
function renderDiscover() { const picks = [getShow('fallout'), getShow('ripley'), getShow('dune'), getShow('slow-horses'), getShow('arcane'), getShow('shogun')].filter(Boolean); appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Find your next favorite</div><h1 class="page-title">Discover</h1><p class="page-subtitle">Search the live catalog or browse ideas based on the stories already in your orbit.</p></div><div class="head-actions"><a class="button source-button" href="https://ext.to/" target="_blank" rel="noopener noreferrer"><span class="button-icon">↗</span>External source</a><a class="button source-button" href="https://psa.wf/" target="_blank" rel="noopener noreferrer"><span class="button-icon">↗</span>Second source</a></div></div><div class="search-input-large"><span class="search-icon" aria-hidden="true"></span><input id="discover-search" type="search" placeholder="Search the catalog..."></div><section class="source-shelf"><div><div class="eyebrow">Personal bookmarks</div><h2 class="section-title">Your external sources</h2><p>Open these sites in a separate tab. TVNerd links you to search results — it does not search, scrape, or download from them.</p></div><div class="source-shelf-links"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><span class="yt-logo" aria-hidden="true">▶</span><strong>YouTube</strong><span>Watch &amp; stream ↗</span></a><a href="https://ext.to/" target="_blank" rel="noopener noreferrer"><strong>EXT</strong><span>Open ext.to ↗</span></a><a href="https://psa.wf/" target="_blank" rel="noopener noreferrer"><strong>PSA</strong><span>Open psa.wf ↗</span></a></div></section><section class="section-block"><div class="section-header"><div><h2 class="section-title">Handpicked for you</h2><span class="section-meta">Thoughtful recommendations, no noise</span></div></div><div class="discover-grid">${picks.map(show => libraryCard(show, false)).join('')}</div></section><section class="genre-shelf"><div class="section-header"><h2 class="section-title">Explore by lane</h2><span class="section-meta">${genreSummary().length} active genres</span></div><div class="genre-chips">${genreSummary().map(([genre, count]) => `<button class="genre-chip" data-genre-filter="${escapeHtml(genre)}" type="button"><span>${escapeHtml(genre)}</span><strong>${count}</strong></button>`).join('')}</div></section>`; bindViewEvents(); bindGenreFilters(); }

function localSearch(query) { return catalog.filter(show => `${show.title} ${show.genre} ${show.type}`.toLowerCase().includes(query.toLowerCase())); }
function localSearchMarkup(results) { return results.length ? results.map(show => `<div class="search-result">${poster(show)}<div class="search-result-copy"><strong>${escapeHtml(show.title)}</strong><span>${show.year} · ${show.type} · ${escapeHtml(show.genre)}</span><span>★ ${show.rating || 'N/A'}</span></div><div class="search-result-actions">${imdbLink(show, true)}<button class="button ${isUserAdded(show.id) ? 'primary' : ''}" data-add-id="${show.id}" type="button">${isUserAdded(show.id) ? '✓ In your library' : '+ Add to library'}</button></div></div>`).join('') : '<div class="empty-state">No local titles found. Search the live catalog below.</div>'; }
function refreshSearchResults(query) {
  const results = localSearch(query);
  const heading = document.querySelector('.search-page > .section-header .section-title');
  const resultList = document.querySelector('.search-page > .search-results');
  const pageInput = document.getElementById('page-search');
  const pageInputIsActive = document.activeElement === pageInput;
  const selectionStart = pageInputIsActive ? pageInput.selectionStart : null;
  const selectionEnd = pageInputIsActive ? pageInput.selectionEnd : null;
  if (pageInput && !pageInputIsActive && pageInput.value !== query) pageInput.value = query;
  if (heading) heading.innerHTML = `${query ? `Results for "${escapeHtml(query)}"` : 'Your library'} <span class="section-meta">${results.length} local titles</span>`;
  if (resultList) { resultList.innerHTML = localSearchMarkup(results); bindViewEvents(); }
  if (pageInputIsActive && document.activeElement !== pageInput) {
    pageInput.focus();
    pageInput.setSelectionRange(selectionStart ?? query.length, selectionEnd ?? query.length);
  }
  const remote = document.getElementById('remote-results');
  if (remote) remote.innerHTML = query.trim() ? '<div class="loading-state">Searching TVMaze...</div>' : '<div class="catalog-note">Live search uses TVMaze public metadata. No account or API key is required.</div>';
  if (query.trim()) searchRemote(query.trim());
}
function renderSearch(query = '', { focusInput = true } = {}) {
  const results = localSearch(query);
  appView.innerHTML = `<div class="search-page"><div class="eyebrow">Live catalog search</div><h1 class="page-title">Find something to watch.</h1><div class="search-input-large"><span class="search-icon" aria-hidden="true"></span><input id="page-search" type="search" value="${escapeHtml(query)}" placeholder="Search shows and movies..."></div><div class="section-header"><h2 class="section-title">${query ? `Results for "${escapeHtml(query)}"` : 'Your library'} <span class="section-meta">${results.length} local titles</span></h2></div><div class="search-results">${localSearchMarkup(results)}</div><div id="remote-results" class="remote-results">${query ? '<div class="loading-state">Searching TVMaze...</div>' : '<div class="catalog-note">Live search uses TVMaze public metadata. No account or API key is required.</div>'}</div></div>`;
  bindViewEvents();
  const input = document.getElementById('page-search');
  input?.addEventListener('input', event => refreshSearchResults(event.target.value));
  if (focusInput) input?.focus();
  if (query.trim()) searchRemote(query.trim());
}
async function searchRemote(query) {
  const token = ++remoteSearchToken;
  let results = remoteSearchCache.get(query.toLowerCase());
  try {
    if (!results) {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Search failed');
      results = await response.json();
      remoteSearchCache.set(query.toLowerCase(), results);
    }
    if (token !== remoteSearchToken || state.activeView !== 'search') return;
    const container = document.getElementById('remote-results');
    if (!container) return;
    const localIds = new Set(catalog.map(show => show.tvmazeId || show.id));
    const matches = results.slice(0, 8).filter(item => !localIds.has(item.show.id));
    container.innerHTML = `<div class="section-header"><h2 class="section-title">Live catalog <span class="section-meta">${matches.length} results</span></h2><span class="source-label">TVMaze</span></div>${matches.length ? `<div class="search-results">${matches.map(item => remoteResult(item.show)).join('')}</div>` : '<div class="empty-state">All matching titles are already in your library.</div>'}`;
    container.querySelectorAll('[data-import-remote]').forEach(button => button.addEventListener('click', () => importRemoteShow(results.find(item => String(item.show.id) === button.dataset.importRemote)?.show)));
  } catch {
    if (token === remoteSearchToken && document.getElementById('remote-results')) document.getElementById('remote-results').innerHTML = '<div class="catalog-note">Live search is unavailable right now. Your local library still works.</div>';
  }
}
function remoteResult(show) { const image = show.image?.medium || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80'; const year = (show.premiered || '').slice(0, 4) || 'Unknown'; const imdbId = show.externals?.imdb; const imdb = imdbId ? `https://www.imdb.com/title/${encodeURIComponent(imdbId)}/` : `https://www.imdb.com/find/?q=${encodeURIComponent(show.name)}`; return `<div class="search-result"><img class="poster" src="${image}" alt="${escapeHtml(show.name)} poster" loading="lazy"><div class="search-result-copy"><strong>${escapeHtml(show.name)}</strong><span>${year} · ${show.type || 'Series'} · ${escapeHtml((show.genres || []).join(' / ') || 'Drama')}</span><span>★ ${show.rating?.average || 'N/A'} · Live metadata</span></div><div class="search-result-actions"><a class="imdb-link compact" href="${imdb}" target="_blank" rel="noopener noreferrer"><b>IMDb</b></a><button class="button primary" data-import-remote="${show.id}" type="button">Add to library</button></div></div>`; }
async function importRemoteShow(remote) {
  if (!remote) return;
  const id = `tvmaze-${remote.id}`;
  let episodes = [];
  try { const response = await fetch(`https://api.tvmaze.com/shows/${remote.id}/episodes`); if (response.ok) episodes = await response.json(); } catch { /* metadata can be added without episode detail */ }
  const imported = { id, tvmazeId: remote.id, imdbId: remote.externals?.imdb || '', title: remote.name, year: (remote.premiered || '').slice(0, 4) || 'Unknown', type: remote.type === 'Scripted' ? 'Series' : (remote.type || 'Series'), genre: (remote.genres || []).join(' / ') || 'Uncategorized', rating: remote.rating?.average || 'N/A', status: 'Watchlist', episodes: episodes.length || 1, episodeData: episodes, next: episodes.length ? `S${episodes[0].season} E${episodes[0].number}` : 'S1 E1', nextDate: '', runtime: `${remote.runtime || 45} min`, poster: remote.image?.medium || remote.image?.original || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', backdrop: remote.image?.original || remote.image?.medium || '', description: stripHtml(remote.summary) || 'Added from the live TV metadata catalog.' };
  const existingIndex = catalog.findIndex(show => show.id === id);
  if (existingIndex >= 0) catalog[existingIndex] = { ...catalog[existingIndex], ...imported }; else catalog.push(imported);
  state.watched[id] = state.watched[id] || 0;
  saveCatalog(); saveState(); showToast(`${remote.name} added to your watchlist`); renderShows();
}

async function openShow(id) {
  const show = getShow(id);
  if (!show) return;
  const modal = document.getElementById('show-modal');
  modal.innerHTML = '<div class="loading-state modal-loading">Loading show details...</div>';
  const modalBackdropElement = document.getElementById('modal-backdrop');
  if (!document.body.classList.contains('modal-open')) {
    modalScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.top = `-${modalScrollY}px`;
  }
  modalBackdropElement.hidden = false;
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
  let episodes = show.episodeData || [];
  if (show.tvmazeId && !episodes.length) {
    try { const response = await fetch(`https://api.tvmaze.com/shows/${show.tvmazeId}/episodes`); if (response.ok) { episodes = await response.json(); show.episodeData = episodes; show.episodes = episodes.length; saveCatalog(); } } catch { /* keep the imported summary available offline */ }
  }
  if (!episodes.length && show.type !== 'Movie') episodes = Array.from({ length: Math.min(show.episodes || 6, 12) }, (_, index) => ({ season: 1, number: index + 1, name: `Episode ${index + 1}`, runtime: show.runtime }));
  const watched = watchedEpisodesFor(show);
  const episodeItems = show.type === 'Movie' ? '' : episodes.slice(0, 24).map((episode, index) => `<label class="episode-check"><input type="checkbox" data-modal-episode="${index}" ${isEpisodeWatched(show, episode, index) ? 'checked' : ''}><span>S${episode.season || 1} E${episode.number || index + 1} · ${escapeHtml(episode.name || `Episode ${index + 1}`)}</span><span>${episode.runtime || show.runtime || ''}</span></label>`).join('');
  const backdrop = show.backdrop || show.poster;
  modal.innerHTML = `<div class="cinema-detail" style="--show-backdrop: url('${escapeHtml(backdrop)}')"><div class="cinema-detail-shade"></div><header class="cinema-detail-top"><span class="eyebrow">SHOW DETAILS</span><button class="modal-close" id="close-modal" type="button" aria-label="Close">×</button></header><div class="cinema-hero-copy"><div class="cinema-poster-wrap">${poster(show, 'cinema-poster')}</div><div class="cinema-title-stack"><div class="eyebrow">${show.type} · ${escapeHtml(show.year)} · ${escapeHtml(show.genre)}</div><h2 id="modal-title">${escapeHtml(show.title)}</h2><div class="cinema-meta"><span>★ ${show.rating}/10</span><span>${show.episodes} ${show.type === 'Movie' ? 'film' : 'episodes'}</span><span>${escapeHtml(show.runtime || '45 min')}</span></div><p class="modal-copy">${escapeHtml(show.description)}</p><div class="modal-actions"><button class="button primary" id="modal-watch-button" type="button">${show.status === 'Completed' ? 'Rewatch' : `Mark ${show.next} watched`}</button><button class="button" id="modal-reminder-button" type="button">${state.reminders ? 'Reminder set' : 'Set reminder'}</button>${favoriteButton(show)}<button class="button share-button" id="modal-share-button" type="button" title="Share this title">↗ Share</button>${isUserAdded(id) ? '<button class="button danger-button" id="modal-remove-button" type="button" title="Remove from your library">− Remove from library</button>' : ''}${watchLink(show)}${torrentLink(show, 'EXT', 'ext.to')}${torrentLink(show, 'PSA', 'psa.wf')}${trailerLink(show)}${imdbLink(show)}</div></div></div><div class="cinema-content-dock">${trailerPanelMarkup()}<div class="detail-tabs" role="tablist"><button class="detail-tab active" data-modal-tab="overview" role="tab" type="button">Overview</button>${show.type !== 'Movie' ? '<button class="detail-tab" data-modal-tab="episodes" role="tab" type="button">Episodes</button>' : ''}<button class="detail-tab" data-modal-tab="notes" role="tab" type="button">My details</button></div><section class="detail-panel active" data-modal-panel="overview"><div class="show-controls"><label><span>Library status</span><select id="show-status-select"><option value="Watchlist" ${show.status === 'Watchlist' ? 'selected' : ''}>Watchlist</option><option value="Up next" ${show.status === 'Up next' ? 'selected' : ''}>Up next</option><option value="Watching" ${show.status === 'Watching' ? 'selected' : ''}>Watching</option><option value="Completed" ${show.status === 'Completed' ? 'selected' : ''}>Completed</option></select></label><div><span class="control-label">Your rating</span><div class="star-picker" role="group" aria-label="Your rating">${[1, 2, 3, 4, 5].map(rating => `<button class="rating-star ${Number(state.ratings[id]) >= rating ? 'selected' : ''}" data-rating="${rating}" title="Rate ${rating} out of 5" type="button">★</button>`).join('')}</div></div></div><div class="list-assignment"><label for="show-list-select">Add to a list</label><select id="show-list-select"><option value="">Choose a list</option>${state.lists.map(list => `<option value="${escapeHtml(list.id)}">${escapeHtml(list.name)}</option>`).join('')}</select></div></section>${show.type !== 'Movie' ? `<section class="detail-panel" data-modal-panel="episodes"><div class="episode-tab-heading"><div><span class="eyebrow">WATCH ORDER</span><h3 class="section-title">Episode progress</h3></div><span class="section-meta">${watched}/${show.episodes} watched</span></div><div class="episode-checklist">${episodeItems}</div></section>` : ''}<section class="detail-panel" data-modal-panel="notes"><div class="episode-tab-heading"><div><span class="eyebrow">PRIVATE SPACE</span><h3 class="section-title">Your note</h3></div></div><textarea id="show-note" placeholder="What do you think so far?">${escapeHtml(state.notes[id] || '')}</textarea><button class="button" id="save-note" type="button">Save note</button></section></div></div>`;
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('modal-favorite-button').addEventListener('click', () => { const profile = currentProfile(); const added = !profile.favoriteIds.includes(id); profile.favoriteIds = added ? [...profile.favoriteIds, id] : profile.favoriteIds.filter(item => item !== id); saveState(); openShow(id); showToast(added ? 'Added to favorites' : 'Removed from favorites'); });
  document.getElementById('modal-share-button').addEventListener('click', () => shareText(shareTextForShow(show), show.title));
  document.getElementById('modal-trailer-button').addEventListener('click', () => loadTrailer(show));
  modal.querySelectorAll('[data-modal-tab]').forEach(tab => tab.addEventListener('click', () => { modal.querySelectorAll('[data-modal-tab]').forEach(item => item.classList.toggle('active', item === tab)); modal.querySelectorAll('[data-modal-panel]').forEach(panel => panel.classList.toggle('active', panel.dataset.modalPanel === tab.dataset.modalTab)); }));
  document.getElementById('show-status-select').addEventListener('change', event => { show.status = event.target.value; saveCatalog(); recordActivity(id, `Moved to ${show.status}`); render(); openShow(id); showToast(`${show.title} is now ${show.status}`); });
  modal.querySelectorAll('[data-rating]').forEach(button => button.addEventListener('click', () => { state.ratings[id] = Number(button.dataset.rating); saveState(); recordActivity(id, `Rated ${show.title} ${button.dataset.rating}/5`); modal.querySelectorAll('[data-rating]').forEach(star => star.classList.toggle('selected', Number(star.dataset.rating) <= state.ratings[id])); showToast('Rating saved'); }));
  document.getElementById('modal-remove-button')?.addEventListener('click', () => removeFromLibrary(id));
  document.getElementById('modal-watch-button').addEventListener('click', () => { if (!isUserAdded(id)) { state.userAddedIds.push(id); } if (show.type === 'Movie') { state.watched[id] = 1; } else if (episodes.length) { setEpisodeWatched(show, episodes[watched] || episodes[episodes.length - 1], watched, true); } else { state.watched[id] = Math.min(show.episodes, watched + 1); saveState(); } show.status = state.watched[id] >= show.episodes ? 'Completed' : 'Watching'; saveState(); saveCatalog(); recordActivity(id, `Watched ${show.next}`); closeModal(); render(); showToast(`${show.title} progress updated`); });
  document.getElementById('modal-reminder-button').addEventListener('click', () => { state.reminders = !state.reminders; saveState(); document.getElementById('modal-reminder-button').textContent = state.reminders ? 'Reminder set' : 'Set reminder'; showToast(state.reminders ? 'Release reminders enabled' : 'Release reminders disabled'); });
  document.getElementById('show-list-select').addEventListener('change', event => { const list = state.lists.find(item => item.id === event.target.value); if (!list) return; list.showIds = [...new Set([...(list.showIds || []), show.id])]; saveState(); renderSidebarLists(); showToast(`${show.title} added to ${list.name}`); });
  document.getElementById('save-note').addEventListener('click', () => { state.notes[id] = document.getElementById('show-note').value; saveState(); recordActivity(id, 'Saved a personal note'); showToast('Note saved'); });
  modal.querySelectorAll('[data-modal-episode]').forEach(input => input.addEventListener('change', event => { const index = Number(event.target.dataset.modalEpisode); setEpisodeWatched(show, episodes[index], index, event.target.checked); recordActivity(id, `${event.target.checked ? 'Watched' : 'Unwatched'} ${show.next}`); }));
}
function closeModal() {
  document.getElementById('modal-backdrop').hidden = true;
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
  document.body.style.top = '';
  window.scrollTo(0, modalScrollY);
}
function addToWatchlist(id) { const show = getShow(id); if (!show) return; show.status = 'Watchlist'; state.watched[id] = state.watched[id] || 0; if (!isUserAdded(id)) state.userAddedIds.push(id); saveState(); saveCatalog(); recordActivity(id, 'Added to watchlist'); showToast(`${show.title} added to your watchlist`); render(); }
function bindViewEvents() {
  document.querySelectorAll('[data-show-id]').forEach(element => element.addEventListener('click', event => { if (!event.target.closest('button[data-watch-id]') && !event.target.closest('[data-add-id]') && !event.target.closest('[data-external-link]')) openShow(element.dataset.showId); }));
  document.querySelectorAll('[data-watch-id]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); const id = button.dataset.watchId; const show = getShow(id); const current = watchedEpisodesFor(show); const next = current >= show.episodes ? Math.max(0, current - 1) : Math.min(show.episodes, current + 1); state.watched[id] = next; show.status = next >= show.episodes ? 'Completed' : 'Watching'; saveState(); saveCatalog(); recordActivity(id, next >= show.episodes ? 'Completed the title' : `Watched episode ${next}`); render(); showToast(next >= show.episodes ? `${show.title} completed` : `${show.title} progress updated`); }));
  document.querySelectorAll('[data-nav]').forEach(button => button.addEventListener('click', () => { if (button.dataset.legalJump) state.legalSection = button.dataset.legalJump; navigate(button.dataset.nav); }));
  document.querySelectorAll('[data-add-id]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); const id = button.dataset.addId; addToWatchlist(id); button.textContent = '✓ In your library'; button.classList.add('primary'); button.disabled = true; setTimeout(() => { const show = getShow(id); if (show && state.activeView === 'search') renderSearch(); }, 500); }));
  document.getElementById('add-show-button')?.addEventListener('click', () => navigate('search'));
  document.getElementById('export-button')?.addEventListener('click', exportData);
  document.getElementById('import-button')?.addEventListener('click', () => document.getElementById('import-input').click());
  document.getElementById('reminder-button')?.addEventListener('click', () => { state.reminders = !state.reminders; saveState(); render(); showToast(state.reminders ? 'Release reminders enabled' : 'Release reminders disabled'); });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { const filter = button.dataset.filter; document.querySelectorAll('.library-card').forEach(card => { const show = getShow(card.dataset.showId); card.style.display = filter === 'all' || show.status === filter ? '' : 'none'; }); }));
  const discoverSearch = document.getElementById('discover-search');
  discoverSearch?.addEventListener('input', event => { const query = event.target.value.toLowerCase(); document.querySelectorAll('.discover-grid .library-card').forEach(card => { card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none'; }); });
}
let librarySelection = new Set();
function bindLibraryFilters() {
  const search = document.getElementById('library-search'); const status = document.getElementById('library-status-filter'); const type = document.getElementById('library-type-filter');
  const apply = () => { const query = search.value.toLowerCase(); document.querySelectorAll('#library-grid .library-card').forEach(card => { const show = getShow(card.dataset.showId); const matches = (!query || `${show.title} ${show.genre}`.toLowerCase().includes(query)) && (status.value === 'all' || show.status === status.value) && (type.value === 'all' || show.type === type.value); card.style.display = matches ? '' : 'none'; }); };
  search?.addEventListener('input', apply); status?.addEventListener('change', apply); type?.addEventListener('change', apply);

  // Per-card manage menu
  document.querySelectorAll('[data-menu-toggle]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); const id = button.dataset.menuToggle; const menu = document.querySelector(`[data-menu="${id}"]`); document.querySelectorAll('.card-menu:not([hidden])').forEach(open => { if (open !== menu) open.hidden = true; }); if (menu) menu.hidden = !menu.hidden; }));
  document.querySelectorAll('.card-menu [data-lib-action]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); const id = button.closest('.library-card').dataset.showId; const show = getShow(id); button.closest('.card-menu').hidden = true; const action = button.dataset.libAction;
    if (action === 'watchlist') { show.status = show.status === 'Watchlist' ? 'Watching' : 'Watchlist'; state.watched[id] = state.watched[id] || 0; saveCatalog(); recordActivity(id, show.status === 'Watchlist' ? 'Added to watchlist' : 'Moved to Watching'); render(); showToast(show.status === 'Watchlist' ? `${show.title} added to watchlist` : `${show.title} moved to Watching`); }
    else if (action === 'favorite') { const profile = currentProfile(); const added = !profile.favoriteIds.includes(id); profile.favoriteIds = added ? [...profile.favoriteIds, id] : profile.favoriteIds.filter(item => item !== id); saveState(); render(); showToast(added ? 'Added to favorites' : 'Removed from favorites'); }
    else if (action === 'remove') removeFromLibrary(id);
    else if (action === 'delete') deleteTitle(id);
  }));
  document.addEventListener('click', event => { if (!event.target.closest('.library-card')) document.querySelectorAll('.card-menu:not([hidden])').forEach(menu => menu.hidden = true); });

  // Bulk manage mode
  const manageButton = document.getElementById('library-manage-button');
  const selectionBar = document.getElementById('library-selection-bar');
  manageButton?.addEventListener('click', () => { const manage = document.body.classList.toggle('library-managing'); librarySelection.clear(); renderLibrarySelectionUI(manage); });
  document.querySelectorAll('#library-grid .library-card').forEach(card => { if (!card.dataset.manageBound) { card.dataset.manageBound = '1'; card.addEventListener('click', event => { if (document.body.classList.contains('library-managing') && !event.target.closest('[data-menu-toggle]') && !event.target.closest('.card-menu')) { const id = card.dataset.showId; librarySelection.has(id) ? librarySelection.delete(id) : librarySelection.add(id); renderLibrarySelectionUI(true); } }); } });
  document.getElementById('library-selection-cancel')?.addEventListener('click', () => { document.body.classList.remove('library-managing'); librarySelection.clear(); renderLibrarySelectionUI(false); });
  const bulk = (action) => { const ids = [...librarySelection]; if (!ids.length) return showToast('Select some titles first'); ids.forEach(id => { action === 'remove' ? removeFromLibrary(id) : deleteTitleNoConfirm(id); }); document.body.classList.remove('library-managing'); librarySelection.clear(); render(); showToast(`${ids.length} title${ids.length > 1 ? 's' : ''} ${action === 'remove' ? 'removed' : 'deleted'}`); };
  document.getElementById('library-selection-remove')?.addEventListener('click', () => bulk('remove'));
  document.getElementById('library-selection-delete')?.addEventListener('click', () => { if (librarySelection.size && window.confirm(`Delete ${librarySelection.size} selected title${librarySelection.size > 1 ? 's' : ''}?`)) bulk('delete'); });
}
function deleteTitleNoConfirm(id) { state.userAddedIds = state.userAddedIds.filter(item => item !== id); purgeShowData(id); if (!baseCatalog.some(base => base.id === id)) catalog = catalog.filter(show => show.id !== id); saveState(); saveCatalog(); renderSidebarLists(); }
function renderLibrarySelectionUI(manage) {
  document.body.classList.toggle('library-managing', manage);
  document.getElementById('library-selection-bar').hidden = !manage;
  if (manage) { document.getElementById('library-manage-button').textContent = '☑ Managing…'; } else { const btn = document.getElementById('library-manage-button'); if (btn) btn.textContent = '☑ Manage'; }
  document.querySelectorAll('#library-grid .library-card').forEach(card => { card.classList.toggle('selected', librarySelection.has(card.dataset.showId)); });
  document.getElementById('library-selected-count').textContent = `${librarySelection.size} selected`;
}
function bindGenreFilters() { document.querySelectorAll('[data-genre-filter]').forEach(button => button.addEventListener('click', () => { const genre = button.dataset.genreFilter.toLowerCase(); navigate('shows'); setTimeout(() => { const search = document.getElementById('library-search'); if (search) { search.value = genre; search.dispatchEvent(new Event('input')); } }, 0); }));
}
function renderList(listId) {
  const list = state.lists.find(item => item.id === listId);
  if (!list) return renderToday();
  const shows = catalog.filter(show => list.showIds?.includes(show.id));
  appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Your list</div><h1 class="page-title">${escapeHtml(list.name)}</h1><p class="page-subtitle">A private collection of titles you want close at hand.</p></div><div class="head-actions"><button class="button" data-nav="shows" type="button">Back to library</button></div></div>${shows.length ? `<div class="library-grid">${shows.map(show => libraryCard(show, false)).join('')}</div>` : '<div class="empty-state">This list is empty. Open a title and add it here.</div>'}`;
  bindViewEvents();
}
function navigate(view) { state.activeView = view; saveState(); document.querySelectorAll('.nav-item, .stream-nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view)); render(); }
function render() { updateChrome(); document.body.classList.toggle('stream-home-active', state.activeView === 'today'); if (state.activeView?.startsWith('list:')) renderList(state.activeView.slice(5)); else if (state.activeView === 'shows') renderShows(); else if (state.activeView === 'calendar') renderCalendar(); else if (state.activeView === 'discover') renderDiscover(); else if (state.activeView === 'search') renderSearch(); else if (state.activeView === 'profile') renderProfile(); else if (state.activeView === 'legal') renderLegal(); else renderToday(); }
const legalSections = [
  { id: 'terms', label: 'Terms of Service', title: 'Terms of Service', updated: 'August 23, 2026', body: [['1. Acceptance of terms', 'By creating an account, signing in, or using TVNerd (“the Service”), you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Service.'], ['2. Description of the service', 'TVNerd is a personal TV guide and watch-tracking application. It helps you organize shows and movies, track watch progress, rate titles, set release reminders, and link out to external sources you choose. TVNerd does not host, stream, sell, or provide any video content itself, and it does not search, scrape, or download content from external sites on your behalf.'], ['3. Your account', 'You are responsible for safeguarding your account credentials and for all activity that happens under your account. You agree to provide accurate information and to notify us promptly if you believe your account has been compromised. You must be at least 13 years old to use the Service.'], ['4. Acceptable use', 'You agree not to misuse the Service, including attempts to disrupt it, reverse engineer it, access it with automated tools in violation of its terms, or use it to infringe the rights of others. You may use external links only in accordance with the terms of those external sites.'], ['5. External links and third parties', 'The Service may link to third-party websites and services such as YouTube, IMDb, TVMaze, and other sources you add as bookmarks. These links are provided for your convenience only. TVNerd has no control over, and assumes no responsibility for, the content, privacy practices, or availability of any third-party site. Visiting external sites is always at your own discretion and risk.'], ['6. Intellectual property', 'The TVNerd name, logo, and interface are provided for your personal use. Third-party names, logos, and metadata (such as IMDb ratings or TVMaze data) remain the property of their respective owners and are used for identification and reference only.'], ['7. Termination', 'You may stop using the Service at any time and delete your local data from your device. We may suspend or terminate access if you violate these Terms.'], ['8. Disclaimers', 'The Service is provided “as is” and “as available” without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or that metadata and release dates will always be accurate.'], ['9. Limitation of liability', 'To the maximum extent permitted by law, TVNerd and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.'], ['10. Changes to these terms', 'We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the updated Terms.'], ['11. Contact', 'Questions about these Terms can be sent to legal@tvnerd.app.']] },
  { id: 'privacy', label: 'Privacy Policy', title: 'Privacy Policy', updated: 'August 23, 2026', body: [['1. Overview', 'This Privacy Policy explains what information TVNerd collects, how it is used, and the choices you have. By using the Service you agree to the practices described here.'], ['2. Information you provide', 'When you create an account or sign in (for example with Google via Clerk), we receive the identity information your chosen provider shares, such as your name, email address, and profile picture. You may also add a display name, username, bio, friends list, ratings, notes, and watch history.'], ['3. Information stored locally', 'Your library, watch progress, ratings, notes, lists, activity log, and profile details are stored locally on your device (browser storage) by default. This data stays on your device unless you export or sync it. Exporting creates a JSON file you control.'], ['4. Information we process', 'When you use the trailer lookup feature, TVNerd sends a title query to YouTube’s public API so a matching trailer can be found and embedded. Search links you open go directly to the external site you choose.'], ['5. Third-party services', 'The Service uses Clerk for authentication, Convex for backend functions, YouTube for trailer search and playback, and TVMaze for public metadata. Each of these services processes data according to its own privacy policy. We do not sell your personal information.'], ['6. How we use information', 'We use your information to operate the Service: authenticate you, remember your library and preferences, personalize recommendations, and provide the features you use.'], ['7. Data retention and deletion', 'Local data remains on your device until you clear it or sign out. You can delete your data at any time by clearing browser storage or using the Sign out option. Cloud account data can be deleted through your Clerk account settings.'], ['8. Your rights', 'You may access, correct, export, or delete your personal data as described above. You can also revoke access to third-party services (such as Google) through your provider’s account settings.'], ['9. Children’s privacy', 'The Service is not directed at children under 13, and we do not knowingly collect personal information from children under 13.'], ['10. Changes to this policy', 'We may update this Privacy Policy from time to time. Material changes will be reflected by an updated “last revised” date.'], ['11. Contact', 'Privacy questions can be sent to privacy@tvnerd.app.']] },
  { id: 'cookies', label: 'Cookie Policy', title: 'Cookie Policy', updated: 'August 23, 2026', body: [['1. What this policy covers', 'This policy explains how TVNerd uses cookies, local storage, and similar technologies to keep you signed in and remember your preferences.'], ['2. Essential storage', 'TVNerd uses local browser storage to save your session, library, watch history, and settings so the app works correctly. These are essential to the Service and cannot be disabled without affecting functionality.'], ['3. Authentication cookies', 'When you sign in, our authentication provider (Clerk) may set cookies or storage tokens needed to keep you signed in. Google sign-in may set cookies as part of its own authentication flow.'], ['4. Third-party technologies', 'Embedded YouTube trailers may load YouTube’s player, which can set its own cookies and local storage subject to Google’s privacy policy. External links you open are governed by the privacy practices of those sites.'], ['5. Managing storage', 'You can clear cookies and site data through your browser settings at any time. Clearing this data will sign you out and remove locally stored library data, so export first if you want to keep it.'], ['6. Contact', 'Cookie questions can be sent to legal@tvnerd.app.']] },
  { id: 'dmca', label: 'DMCA / Copyright', title: 'DMCA & Copyright Notice', updated: 'August 23, 2026', body: [['1. No content hosting', 'TVNerd is a TV guide and tracking application. It does not host, upload, store, or transmit video, audio, or other infringing content, and it does not search, scrape, or download content from external sites on your behalf.'], ['2. External links', 'The Service may provide links to third-party websites as personal bookmarks you configure. TVNerd does not control these sites and is not responsible for their content. Copyright concerns about content found on external sites should be directed to the operator of that site.'], ['3. Reporting copyright infringement', 'If you believe material on the Service itself infringes your copyright, send a notice to dmca@tvnerd.app with: your contact information, identification of the copyrighted work, the URL or location of the allegedly infringing material, a statement of good-faith belief, and a statement under penalty of perjury that your notice is accurate and you are authorized to act.'], ['4. Response', 'We will review valid notices and remove or disable access to any material hosted on the Service that clearly infringes copyright.'], ['5. Repeat infringers', 'Accounts or activity that repeatedly infringe copyright may be suspended or terminated.']] },
  { id: 'disclaimer', label: 'Disclaimer', title: 'Disclaimer & Affiliations', updated: 'August 23, 2026', body: [['1. No affiliation', 'TVNerd is an independent project and is not affiliated with, endorsed by, or sponsored by IMDb, Google, YouTube, TVMaze, or any streaming or torrent service.'], ['2. Trademarks', 'All product names, logos, and brands shown in the Service (including IMDb, Google, YouTube, and any bookmarked sites) are the property of their respective owners and are used for identification and reference only.'], ['3. Metadata accuracy', 'Ratings, release dates, episode information, and artwork are gathered from public metadata sources and may be incomplete or out of date. Use them as a guide, not as a guarantee.'], ['4. Your responsibility', 'You are responsible for how you use external links and for complying with the terms and laws that apply to the sites you visit.'], ['5. No warranty', 'The Service is provided without warranty of any kind. Use it at your own discretion.']] }
];
function renderLegal() {
  const section = state.legalSection || 'terms';
  const active = legalSections.find(item => item.id === section) || legalSections[0];
  appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Trust &amp; transparency</div><h1 class="page-title">Legal &amp; policies</h1><p class="page-subtitle">The terms, privacy practices, and policies that govern your TVNerd experience.</p></div><div class="head-actions"><button class="button" id="legal-export-button" type="button">Export my data</button></div></div><div class="legal-layout"><aside class="legal-nav" aria-label="Legal sections">${legalSections.map(item => `<button class="legal-nav-item ${item.id === active.id ? 'active' : ''}" data-legal-section="${item.id}" type="button">${escapeHtml(item.label)}</button>`).join('')}</aside><section class="legal-content"><div class="legal-head"><span class="eyebrow">POLICY · LAST REVISED ${escapeHtml(active.updated).toUpperCase()}</span><h2 class="section-title legal-h">${escapeHtml(active.title)}</h2></div>${active.body.map(([heading, text]) => `<div class="legal-block"><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p></div>`).join('')}</section></div>`;
  document.querySelectorAll('[data-legal-section]').forEach(button => button.addEventListener('click', () => { state.legalSection = button.dataset.legalSection; saveState(); renderLegal(); }));
  document.getElementById('legal-export-button').addEventListener('click', exportData);
  bindViewEvents();
}
function renderProfile() {
  const profile = currentProfile(); const stats = profileStats();
  const favorites = profile.favoriteIds.map(getShow).filter(Boolean);
  appView.innerHTML = `<div class="page-head"><div><div class="eyebrow">Your social space</div><h1 class="page-title">Profile and settings</h1><p class="page-subtitle">Personalize your watch identity, connect with friends, and control your local TVNerd experience.</p></div><div class="head-actions"><button class="button" id="profile-share-button" type="button">↗ Share profile</button><button class="button primary" id="profile-save-button" type="button">Save profile</button></div></div><div class="profile-layout"><section class="profile-hero panel"><div class="profile-hero-art"></div><div class="profile-hero-content">${avatarMarkup(profile, 'profile-large-avatar')}<div class="profile-identity"><span class="eyebrow">LOCAL PROFILE</span><h2>${escapeHtml(profile.displayName)}</h2><span>${escapeHtml(profile.username || '@localviewer')}</span><p>${escapeHtml(profile.bio || 'No bio yet.')}</p></div></div><div class="profile-stat-row"><div><strong>${stats.watched}</strong><span>Episodes watched</span></div><div><strong>${stats.completed}</strong><span>Titles completed</span></div><div><strong>${stats.favorites}</strong><span>Favorites</span></div><div><strong>${profile.friends.length}</strong><span>Friends</span></div></div></section><section class="panel profile-editor"><div class="panel-header"><div><h2 class="panel-title">Personal details</h2><span class="section-meta">Visible on your local profile</span></div><span class="source-label">LOCAL ONLY</span></div><div class="profile-form"><label>Display name<input id="profile-name" value="${escapeHtml(profile.displayName)}" maxlength="40" placeholder="Your name"></label><label>Username<input id="profile-username" value="${escapeHtml(profile.username)}" maxlength="24" placeholder="@username"></label><label class="profile-bio-field">Bio<textarea id="profile-bio" maxlength="160" placeholder="Tell friends what you like to watch...">${escapeHtml(profile.bio)}</textarea></label><label>Profile picture<input id="profile-avatar-file" type="file" accept="image/png,image/jpeg,image/webp"></label><label>Activity visibility<select id="profile-visibility"><option value="private" ${profile.activityVisibility === 'private' ? 'selected' : ''}>Private</option><option value="friends" ${profile.activityVisibility === 'friends' ? 'selected' : ''}>Friends only</option><option value="public" ${profile.activityVisibility === 'public' ? 'selected' : ''}>Public preview</option></select></label></div></section><section class="panel friends-panel"><div class="panel-header"><div><h2 class="panel-title">Friends</h2><span class="section-meta">Share what you are watching</span></div><button class="button" id="add-friend-button" type="button">+ Add friend</button></div><div class="friend-list">${profile.friends.map(friend => `<div class="friend-row"> <span class="friend-avatar">${escapeHtml(friend.initials)}</span><span class="friend-copy"><strong>${escapeHtml(friend.name)}</strong><small>${escapeHtml(friend.handle)} · ${escapeHtml(friend.status)}</small></span><button class="icon-action remove-friend" data-friend-id="${escapeHtml(friend.id)}" type="button" aria-label="Remove ${escapeHtml(friend.name)}">×</button></div>`).join('')}</div><div class="social-note">Friend accounts and cross-device sharing will activate when cloud accounts are connected. These contacts are stored locally for now.</div></section><section class="panel favorites-panel"><div class="panel-header"><div><h2 class="panel-title">Favorite titles</h2><span class="section-meta">Your personal must-watch shelf</span></div><span class="source-label">${favorites.length} saved</span></div>${favorites.length ? `<div class="cover-row">${favorites.map(show => coverCard(show, 'FAVORITE')).join('')}</div>` : '<div class="empty-state">Open a title and tap ☆ to build your favorites shelf.</div>'}</section><section class="panel settings-panel"><div class="panel-header"><div><h2 class="panel-title">App settings</h2><span class="section-meta">Local preferences and data</span></div></div><div class="setting-row"><div><strong>Release reminders</strong><span>Keep upcoming episodes on your radar.</span></div><button class="toggle ${state.reminders ? 'on' : ''}" id="settings-reminder" type="button" aria-label="Toggle reminders"></button></div><div class="setting-row"><div><strong>Google Calendar</strong><span>Add releases to Google Calendar through the event composer, or export the full guide as an .ics file.</span></div><div class="setting-actions"><button class="button" id="google-calendar-connect" type="button">${state.googleCalendarConnected ? 'Google connected' : 'Connect Google'}</button><button class="button" id="settings-calendar-export" type="button">Export .ics</button></div></div><div class="setting-row"><div><strong>Browser notifications</strong><span>Ask this device for permission to show release reminders.</span></div><button class="toggle ${state.browserNotifications ? 'on' : ''}" id="settings-notifications" type="button" aria-label="Toggle browser notifications"></button></div><div class="setting-row"><div><strong>Cloud sync</strong><span>Connect an account for desktop/mobile sharing.</span></div><button class="button primary" id="connect-account" type="button">Connect account</button></div><div class="setting-row"><div><strong>Export your data</strong><span>Download your profile, friends, watch history, notes, and ratings.</span></div><button class="button" id="settings-export" type="button">Export JSON</button></div><div class="setting-row"><div><strong>Session</strong><span>End this device session and return to the login screen.</span></div><button class="button" id="logout-button" type="button">Sign out</button></div><div class="setting-row"><div><strong>Legal &amp; policies</strong><span>Terms of Service, Privacy Policy, Cookie Policy, DMCA notice, and disclaimer.</span></div><button class="button" data-nav="legal" type="button">View policies</button></div></section></div>`;
  const saveProfile = () => { const next = currentProfile(); next.displayName = document.getElementById('profile-name').value.trim() || 'TVNerd viewer'; next.username = document.getElementById('profile-username').value.trim() || '@viewer'; next.bio = document.getElementById('profile-bio').value.trim(); next.activityVisibility = document.getElementById('profile-visibility').value; saveState(); updateChrome(); renderProfile(); showToast('Profile saved'); };
  document.getElementById('profile-save-button').addEventListener('click', saveProfile);
  document.getElementById('profile-share-button').addEventListener('click', () => shareText(`${profile.displayName} ${profile.username} — ${profile.bio} Favorite titles: ${favorites.map(show => show.title).join(', ') || 'Still building the shelf'}.`, 'TVNerd profile'));
  document.getElementById('profile-avatar-file').addEventListener('change', event => { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { currentProfile().avatar = reader.result; saveState(); renderProfile(); showToast('Profile picture updated'); }; reader.readAsDataURL(file); });
  document.getElementById('settings-reminder').addEventListener('click', () => { state.reminders = !state.reminders; saveState(); renderProfile(); });
  document.getElementById('settings-export').addEventListener('click', exportData);
  document.getElementById('settings-calendar-export').addEventListener('click', () => downloadCalendarFile(filteredReleases()));
  document.getElementById('google-calendar-connect').addEventListener('click', () => { if (!state.googleCalendarConnected) { showToast('Full Google Calendar sync needs OAuth credentials; use Add next to Google or Export .ics for now'); return; } state.googleCalendarConnected = false; saveState(); renderProfile(); showToast('Google Calendar connection removed'); });
  document.getElementById('settings-notifications').addEventListener('click', async () => { if (!('Notification' in window)) { showToast('This browser does not support notifications'); return; } if (Notification.permission === 'default') await Notification.requestPermission(); state.browserNotifications = Notification.permission === 'granted' ? !state.browserNotifications : false; saveState(); renderProfile(); showToast(state.browserNotifications ? 'Browser release notifications enabled' : 'Browser notifications disabled'); });
  document.getElementById('connect-account').addEventListener('click', () => showToast('Cloud sync is ready for the account backend integration'));
  document.getElementById('logout-button').addEventListener('click', () => { clearSession(); showAuth(); showToast('Signed out of this device'); });
  document.getElementById('add-friend-button').addEventListener('click', () => { const name = window.prompt('Friend display name'); if (!name?.trim()) return; const handle = window.prompt('Friend username', `@${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '')}`) || '@friend'; currentProfile().friends.push({ id: `friend-${Date.now()}`, name: name.trim().slice(0, 32), handle: handle.trim().slice(0, 24), initials: name.trim().split(/\\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase(), status: 'New friend' }); saveState(); renderProfile(); showToast(`${name.trim()} added`); });
  document.querySelectorAll('.remove-friend').forEach(button => button.addEventListener('click', () => { currentProfile().friends = currentProfile().friends.filter(friend => friend.id !== button.dataset.friendId); saveState(); renderProfile(); showToast('Friend removed'); }));
  bindViewEvents();
}
function exportData() { const data = { exportedAt: new Date().toISOString(), app: 'TVNerd', state, catalog }; const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'tvnerd-library.json'; link.click(); URL.revokeObjectURL(link.href); showToast('Library exported'); }

document.getElementById('import-input').addEventListener('change', event => { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const imported = JSON.parse(reader.result); if (imported.state) state = { ...defaultState, ...imported.state, watched: { ...defaultState.watched, ...(imported.state.watched || {}) }, watchedEpisodes: { ...defaultState.watchedEpisodes, ...(imported.state.watchedEpisodes || {}) }, lists: Array.isArray(imported.state.lists) ? imported.state.lists : defaultState.lists, ratings: { ...defaultState.ratings, ...(imported.state.ratings || {}) }, notes: { ...defaultState.notes, ...(imported.state.notes || {}) }, activity: Array.isArray(imported.state.activity) ? imported.state.activity : [], profile: { ...defaultState.profile, ...(imported.state.profile || {}), favoriteIds: Array.isArray(imported.state.profile?.favoriteIds) ? imported.state.profile.favoriteIds : defaultState.profile.favoriteIds, friends: Array.isArray(imported.state.profile?.friends) ? imported.state.profile.friends : defaultState.profile.friends } }; if (Array.isArray(imported.catalog)) catalog = imported.catalog; saveState(); saveCatalog(); renderSidebarLists(); render(); showToast('Library imported successfully'); } catch { showToast('That file is not a valid TVNerd export'); } event.target.value = ''; }; reader.readAsText(file); });
document.querySelectorAll('.nav-item, .stream-nav-item').forEach(button => button.addEventListener('click', () => navigate(button.dataset.view)));
document.querySelectorAll('[data-stream-action="recording"]').forEach(button => button.addEventListener('click', () => showToast('Recording center is ready for your connected TV service')));
document.getElementById('global-search-input').addEventListener('input', event => { const query = event.target.value; if (!query.trim()) return; if (state.activeView !== 'search') { state.activeView = 'search'; renderSearch(query, { focusInput: false }); } else { refreshSearchResults(query); } event.target.focus(); event.target.setSelectionRange(query.length, query.length); });
document.getElementById('global-search-input').addEventListener('keydown', event => { if (event.key === 'Enter') { state.activeView = 'search'; renderSearch(event.target.value.trim(), { focusInput: false }); event.target.focus(); } });
document.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('global-search-input').focus(); } if (event.key === 'Escape') closeModal(); });
const modalBackdrop = document.getElementById('modal-backdrop');
modalBackdrop.addEventListener('click', event => { if (event.target.id === 'modal-backdrop') closeModal(); });
modalBackdrop.addEventListener('wheel', event => { if (!event.target.closest('.cinema-content-dock')) event.preventDefault(); }, { passive: false });
modalBackdrop.addEventListener('touchmove', event => { if (!event.target.closest('.cinema-content-dock')) event.preventDefault(); }, { passive: false });
document.getElementById('sync-button').addEventListener('click', () => showToast('Cloud sync will be connected in the next setup step'));
document.getElementById('notifications-button').addEventListener('click', () => showToast(state.reminders ? 'You have 3 release reminders' : 'Release reminders are off'));
document.getElementById('profile-button').addEventListener('click', () => navigate('profile'));
document.getElementById('mobile-profile-button').addEventListener('click', () => navigate('profile'));
document.getElementById('new-list-button').addEventListener('click', createList);
document.getElementById('menu-toggle')?.addEventListener('click', () => { const mobile = window.matchMedia('(max-width: 680px)').matches; const className = mobile ? 'menu-open' : 'menu-collapsed'; document.body.classList.toggle(className); const expanded = document.body.classList.contains(className); document.getElementById('menu-toggle').setAttribute('aria-expanded', String(expanded)); document.getElementById('menu-scrim').hidden = !mobile || !expanded; });
document.getElementById('menu-scrim')?.addEventListener('click', () => { document.body.classList.remove('menu-open'); document.getElementById('menu-scrim').hidden = true; });
initAuth();
renderSidebarLists();
updateChrome();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
render();