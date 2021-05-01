<template>
  <footer class="footer">
    <div class="container">
      <nav class="float-left">
        <ul>
          <li>
            <a href="https://tanhongit.com/"> Creative Tim </a>
          </li>
          <li>
            <a href="https://creative-tim.com/presentation"> About Us </a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com/"> Blog </a>
          </li>
          <li>
            <router-link :to="{ name: 'register' }">Register</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
        &copy; , made with <i class="material-icons">favorite</i> by
        <a href="https://tanhongit.com/" target="_blank">Creative Tim</a>
        for a better web.
      </div>
    </div>
  </footer>
</template>