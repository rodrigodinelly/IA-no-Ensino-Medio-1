(function () {
  const key = 'ia-para-aprender:estado:v1';
  const fresh = () => ({ version: 1, profile: null, diagnostic: { answers: {}, index: 0, finished: false, score: 0, criticalScore: 0 }, currentTrack: null, tracks: { explorador: trackState(), usuario: trackState() } });
  const trackState = () => ({ started: false, currentModule: 1, completed: [], challengeDone: false, completedTrack: false });
  let memory = fresh();
  let persistent = true;
  function valid(s) { return s && s.version === 1 && s.diagnostic && s.tracks && ['explorador', 'usuario'].every(k => s.tracks[k]); }
  function load() { try { const raw = localStorage.getItem(key); memory = raw && valid(JSON.parse(raw)) ? JSON.parse(raw) : fresh(); } catch (_) { persistent = false; memory = fresh(); } return memory; }
  function save() { try { localStorage.setItem(key, JSON.stringify(memory)); } catch (_) { persistent = false; } return memory; }
  function get() { return memory; }
  function update(mutator) { mutator(memory); return save(); }
  function resetDiagnostic() { update(s => { s.profile = null; s.diagnostic = fresh().diagnostic; }); }
  function clear() { try { localStorage.removeItem(key); } catch (_) {} memory = fresh(); return memory; }
  window.AppStorage = { load, get, update, resetDiagnostic, clear, isPersistent: () => persistent };
})();
