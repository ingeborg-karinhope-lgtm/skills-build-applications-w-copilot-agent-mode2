const baseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';
const logoUrl = '/octofitapp-small.png';

export default function App() {
  return (
    <main className="app-shell">
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <img
              alt="OctoFit Tracker logo"
              className="mb-4 rounded-4 shadow"
              height="88"
              src={logoUrl}
              width="88"
            />
            <span className="badge text-bg-dark mb-3">OctoFit Tracker</span>
            <h1 className="display-4 fw-bold text-light mb-3">
              Train smarter across teams, workouts, and leaderboards.
            </h1>
            <p className="lead text-secondary-emphasis mb-4">
              React 19 + Vite frontend on port 5173, wired to the API on port 8000.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-warning btn-lg" href={baseUrl}>
                API Base URL
              </a>
              <span className="text-secondary align-self-center">
                Mongoose-backed data tier on MongoDB 27017
              </span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 bg-dark text-light">
              <div className="card-body p-4">
                <h2 className="h4 fw-semibold">Starter modules</h2>
                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item bg-transparent text-light px-0">Authentication and profiles</li>
                  <li className="list-group-item bg-transparent text-light px-0">Activity logging and tracking</li>
                  <li className="list-group-item bg-transparent text-light px-0">Team creation and management</li>
                  <li className="list-group-item bg-transparent text-light px-0">Competitive leaderboard</li>
                  <li className="list-group-item bg-transparent text-light px-0">Personalized workout suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}