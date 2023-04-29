import log from './services/log-service'
import AppRoutes from './router/routes';

function App() {
  const name = App.name
  log.info(`${name} component being creation`)
  log.info(`${name} component end creation`)
  return (
    <AppRoutes />
  );
}

export default App;
