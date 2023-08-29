<script>
  import { signOut, onAuthStateChanged } from "firebase/auth";
  import { isLoggedIn, user } from "../store";
  import { auth } from "./firebase";
  const logOut = () => {
    signOut(auth);
    // $isLoggedIn = false
    // $user = {}
  };

  onAuthStateChanged(auth, (authUser) => {
    console.log(!!authUser);
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    {#if $isLoggedIn}
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/#" on:click={logOut}>Logout</a>
      </li>
    {:else}
      <li>
        <a href="/login">Login</a>
      </li>
    {/if}
  </ul>
</nav>
<slot />
