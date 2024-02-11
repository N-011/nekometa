<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png" /> -->
    <div class="background">
      <div class="header-text">
        <h1>Flamingo~</h1>
      </div>
      <div class="header-img">
        <img
          src="https://images.unsplash.com/photo-1650647441377-715a124f6a2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.background {
  background: url(../assets/img/noah_back.JPG);
  background-repeat: no-repeat;
  background-clip: content-box;
  background-size: cover;
  background-position-y: -300px;
  /* backdrop-filter: blur(8px); */
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-text {
  height: 100%;
  width: 20%;
  text-align: center;
  margin-top: 10%;
  color: rgba(66, 66, 66, 0.349);
  margin-left: 180px;
}

.header-text > h1 {
  font-weight: 300;
  font-style: italic;
}

.header-img {
  height: 80%;
  width: 300px;
  margin-right: 180px;
}

.header-img > img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
</style>
