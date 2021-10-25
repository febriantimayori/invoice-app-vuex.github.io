<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const handleSubmit = async e => {
      const { email, password } = e.target.elements
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
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
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
     <div class="location-details flex">
        <div class="input flex flex-column">
          <input name="email" placeholder="email" type="email" />
        </div>
        <div class="input flex flex-column">
          <input name="password" placeholder="password" type="password" />
        </div>
        <button type="submit" class="reg">Register</button>
      </div>
    </form>
    <div class="header flex">
      <div class="left flex">
        <router-link class="nav-link flex" :to="{ name: 'Login' }">
          <img src="@/assets/icon-arrow-left.svg" alt="" class="jarak"/> Back
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
.reg {
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