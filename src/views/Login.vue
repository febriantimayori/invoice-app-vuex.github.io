<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/home')
      } catch (e) {
        alert(e.message)
      }
    }
    return { handleSubmit }
  }
}
</script>

<template>
  <div class="invoice-view container">
    <h1 style="">Login</h1>
    <form @submit.prevent="handleSubmit">
     <div class="location-details flex">
        <div class="input flex flex-column">
          <input name="email" placeholder="email" type="email" />
        </div>
        <div class="input flex flex-column">
          <input name="password" placeholder="password" type="password" />
        </div>
        <button type="submit" class="log">Login</button>
      </div>
    </form>
    <div class="header flex">
      <div class="right flex">
        <router-link class="nav-link flex" :to="{ name: 'SignUp' }">
          Sign Up <img src="@/assets/icon-arrow-right.svg" alt="" class="jarak"/> 
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 48px;
  color: #fff;
}
.log {
  border-radius: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color: #7c5dfa;
}
.nav-link {
  margin-bottom: 32px;
  align-items: center;
  color: #fff;
  font-size: 12px;
  img {
    margin-right: 16px;
    width: 7px;
    height: 10px;
  }
}
.location-details {
  gap: 16px;
  div {
    flex: 1;
  }
}
.input {
  margin-top: 30px;
  margin-bottom: 24px;
}
input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
.jarak {
  margin-left: 20px;
}
.header {
  margin-top: 25px;

  .left,
  .right {
    flex: 1;
  }

  .right {
    justify-content: flex-end;
    align-items: center;
  }
}
</style>