$(function($) {

       $("head").load("include_create_dcp/head.html");
       $("#accordionSidebar").load("include_sections/sidebar.html");
       $("#dcp-topbar").load("include_sections/topbar.html");
       $("#logoutModal").load("include_sections/logout_modal.html");
       $("#dcp-footer").load("include_sections/footer.html");
       //create_dcp.html
       $("#create_j2k_slide_page_content").load("include_create_dcp/j2k_slide.html");
       $("#create_j2k_video_page_content").load("include_create_dcp/j2k_video.html");

});
