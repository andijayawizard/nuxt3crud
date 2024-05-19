<script lang="ts" setup></script>

<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link" target="_blank">
      <img src="" alt="Morillo Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">
        Logo
      </span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="" class="img-circle elevation-2" alt="username">
        </div>
        <div class="info">
          <a href="#" class="d-block">
            username
          </a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu"
          data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
          <li class="nav-header">
            role
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Users
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=user-level" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Level</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=user" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Users</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a id="MainMenu" href="<?= $abs; ?>/backend/pages/index.php?page=main-menu" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Main Menu</p>
                </a>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    SEO Tools
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <!-- <li class="nav-item has-treeview">
                  <a href="#" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Level 2
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </a>
                    </li>
                  </ul>
                </li> -->
                  <li class="nav-item">
                    <NuxtLink id="MenuWeb" to="/menuweb" class="nav-link">
                      <!-- <a id="MenuWeb" href="#menuweb" class="nav-link"> -->
                      <i class="far fa-circle nav-icon"></i>
                      <p>Menu Website</p>
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=seotools&act=edit&id=1" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>SEO General</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="<?= $abs; ?>/backend/pages/index.php?page=image-slide" class="nav-link">
                  <!-- <a id="ImageSlide" href="#image-slide" class="nav-link"> -->
                  <i class="far fa-circle nav-icon"></i>
                  <p>Image Slide</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?= $abs; ?>/backend/pages/index.php?page=career" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Career</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?= $abs; ?>/backend/pages/index.php?page=people" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>People</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="<?= $abs; ?>/backend/pages/index.php?page=testimonial" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Testimonial</p>
                </a>
              </li>

              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Services
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=services-category" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Services Category</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=services" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Services</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Blog
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=blog-category" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Blog Category</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=blog" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Blog</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Misc
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=social-media" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Social Media</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=misc&act=edit&id=1" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Miscellaneous</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=branch" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Branch</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="<?= $abs; ?>/backend/pages/index.php?page=brand" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Brand</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<style scoped></style>
