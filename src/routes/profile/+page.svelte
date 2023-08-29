<script>
  import { isLoggedIn, user } from "../../store";
</script>

<h1>profile</h1>
{#if $isLoggedIn}
  <h1>{$user.displayName}</h1>
  <img src={$user.photoURL} alt={$user.displayName} />
  <p>{$user.email}</p>
{/if}
