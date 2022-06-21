<template>
<nav class="navbar navbar-expand-lg navbar-dark navbar_personal">
    <div class="container-fluid" data-aos="fade-down" data-aos-delay="100" data-aos-duration="400">
      <a class="navbar-brand me-10" href="#">
          <div class="portfolio_logo f-w-10">
            <a class="btn btn-dark" href="http://www.lucagaddini.com">Back to porfolio</a>
          </div>
      </a>
      <ul class="navbar-nav me-auto d-none d-lg-flex mb-lg-0">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center me-4 tracking-wide" href="https://github.com/lucagad"><i style="font-size: 20px" class="bi bi-github me-2 align-middle"></i> GitHub</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-flex align-items-center tracking-wide" href="https://www.linkedin.com/in/lucagaddini/"><i style="font-size: 20px" class="bi bi-linkedin me-2 align-middle"></i> Linkedin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: "PortfolioHeaderComponent"
}
</script>

<style lang="scss" scoped>

.navbar_personal{ 
  background-color: #1a1919;

  a{
    text-decoration: none;
    color: #959595;
    font-size: 16px;

    &:hover,
    &:hover .nav-link{
      color: #3266ff !important;
    }
  }

.portfolio_logo {
  img{
      width: 40px;
    }
  }
}

</style>