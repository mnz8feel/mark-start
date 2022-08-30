<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<main>
  <Router {routes} basename={window.__MICRO_APP_BASE_ROUTE__ || "/"}/>
</main>
