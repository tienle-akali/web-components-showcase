<svelte:options customElement="svelte-card" />

<script>
  export let name = "Your name";
  export let email = "youremail@example.com";
  let count = 0;
</script>

<div class="card">
  <h3>{name}</h3>
  <p>{email}</p>
  <button on:click={() => count++}>Đã thích: {count}</button>
</div>

<style>
  .card {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 20px;
    width: 260px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  h3 { margin: 0 0 8px 0; color: #1a1a1a; font-size: 18px; }
  p { margin: 0 0 16px 0; color: #666; font-size: 14px; }
  button {
    background: #0070f3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    width: 100%;
  }
  button:hover { background: #0051a2; }
</style>