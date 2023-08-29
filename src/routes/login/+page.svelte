<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { auth } from "../firebase.js";
  import { user, isLoggedIn } from "../../store.js";
  import { goto } from "$app/navigation";
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      $user = res.user // <-- acá guardo user en el STORE
      $isLoggedIn = true
      goto("/profile")
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<h1>login</h1>

<button on:click={login}>Login with Google</button>
