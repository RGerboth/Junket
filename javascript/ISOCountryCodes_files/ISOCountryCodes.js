<!DOCTYPE html>
<!-- saved from url=(0041)https://gist.github.com/maephisto/9228207 -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style>body {transition: opacity ease-in 0.2s; } 
body[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } 
</style>
    
  <link rel="dns-prefetch" href="https://assets-cdn.github.com/">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">

<meta content="origin-when-cross-origin" name="referrer">

  <link crossorigin="anonymous" href="./ISOCountryCodes_files/frameworks-521cbf980c80.css" integrity="sha512-Uhy/mAyAx1HfsenmjQ85ASpOk5bjt2Ay03pNeixXIvkHlEm5S+N4u0HWfDGhvsGYx4bGyviXWGGPZeIffqYcNA==" media="all" rel="stylesheet">
  <link crossorigin="anonymous" href="./ISOCountryCodes_files/github-be0481bef7d9.css" integrity="sha512-vgSBvvfZP2Kl3LF7M/gHnUD7GKfHl7aTSB55Cjr6xHkxaP/InJ41AXLEEy+6mArnvt2HJPmZYqGoIRqAZg352Q==" media="all" rel="stylesheet">
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>ISO 3166-1 alpha-2  country code to country name conversion with a simple Javascript implementation, an array and a function.</title>
  <link rel="search" type="application/opensearchdescription+xml" href="https://gist.github.com/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://gist.github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/3056582?s=400&amp;v=4" property="og:image"><meta content="Gist" property="og:site_name"><meta content="object" property="og:type"><meta content="ISO 3166-1 alpha-2  country code to country name conversion with a simple Javascript implementation, an array and a function." property="og:title"><meta content="https://gist.github.com/maephisto/9228207" property="og:url"><meta content="ISO 3166-1 alpha-2  country code to country name conversion with a simple Javascript implementation, an array and a function." property="og:description">

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM3NDMyODI4OmYwODc0ZGY2M2MxZjRhMjcwMjQwN2VmZDIwYjQwZmE5N2YyOWUyNjU1NWJkNjg2MjI0ZjQ4OGQyMjc1MGFjZTM=--2bb63ea33fab2aa9653f562ae0d195a665682963">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="https://gist.github.com/sessions/sudo_modal">
  <meta name="request-id" content="D1FB:7F54:5E9C7:9BEBB:5A78E518" data-pjax-transient="">
  

  <meta name="selected-link" value="gist_code" data-pjax-transient="">

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-4">

<meta content="collector.githubapp.com" name="octolytics-host"><meta content="gist" name="octolytics-app-id"><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url"><meta content="D1FB:7F54:5E9C7:9BEBB:5A78E518" name="octolytics-dimension-request_id"><meta content="iad" name="octolytics-dimension-region_edge"><meta content="iad" name="octolytics-dimension-region_render"><meta content="33574853" name="octolytics-actor-id"><meta content="RGerboth" name="octolytics-actor-login"><meta content="941dcdab7b82b19c3c4d14bfccf5bf4ff917a433b3d79eeeccfe25486da72e0f" name="octolytics-actor-hash">
<meta content="https://gist.github.com/hydro_browser_events" name="hydro-events-url">
<meta content="/&lt;user-name&gt;/&lt;gist-id&gt;" data-pjax-transient="true" name="analytics-location">




  <meta class="js-ga-set" name="dimension1" content="Logged In">



    <meta content="true" name="octolytics-dimension-public"><meta content="9228207" name="octolytics-dimension-gist_id"><meta content="9228207" name="octolytics-dimension-gist_name"><meta content="false" name="octolytics-dimension-anonymous"><meta content="3056582" name="octolytics-dimension-owner_id"><meta content="maephisto" name="octolytics-dimension-owner_login"><meta content="false" name="octolytics-dimension-forked">

  <meta class="js-ga-set" name="dimension5" content="public">
  <meta class="js-ga-set" name="dimension6" content="owned">
  <meta class="js-ga-set" name="dimension7" content="unknown">


      <meta name="hostname" content="gist.github.com">
  <meta name="user-login" content="RGerboth">

      <meta name="expected-hostname" content="gist.github.com">
    <meta name="js-proxy-site-detection-payload" content="M2ZkY2QzZGY0YjIzMmI0M2E4OTBhY2VhMTY4MmZlYTMxNjJiYzgwY2M0NjkxZThjMjhkMDYwYmEwZjk0Yzg0Znx7InJlbW90ZV9hZGRyZXNzIjoiNzMuMjQzLjUyLjE1NyIsInJlcXVlc3RfaWQiOiJEMUZCOjdGNTQ6NUU5Qzc6OUJFQkI6NUE3OEU1MTgiLCJ0aW1lc3RhbXAiOjE1MTc4NzI0MDgsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MULTIPLE_ATTRIBUTION,FREE_TRIALS,MARKETPLACE_HERO_CARD_UPLOADER,CONTRIBUTOR_FLAGGED_CONTENT">

  <meta name="html-safe-nonce" content="6003814538108b5eea8342598c491d0e4332713f">

  <meta http-equiv="x-pjax-version" content="6d566e9acc767373f9ec825b84eb80e9">
  

      <link href="https://gist.github.com/maephisto.atom" rel="alternate" title="atom" type="application/atom+xml">
  
  <link crossorigin="anonymous" href="./ISOCountryCodes_files/gist-94e92bfbe232.css" integrity="sha512-lOkr++IyZRUUQ5AJpl+wQvJgdRYDke2JEUPuz3K5w/BR+eJmnv/WkwWs4rCBHDiMLDfDgJ2CqW/LGUY0jjYv7A==" media="all" rel="stylesheet">




  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production">
    

  <div class="position-relative js-header-wrapper ">
    <a href="https://gist.github.com/maephisto/9228207#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <div class="Header gist-header header-logged-in" role="banner">
  <div class="container-lg px-3 clearfix">
    <div class="d-flex flex-justify-between">
      <div class="d-flex">
        <a href="https://gist.github.com/" aria-label="Gist Homepage" class="header-logo-wordmark" data-hotkey="g d">
          <svg aria-hidden="true" class="octicon octicon-logo-github" height="28" version="1.1" viewBox="0 0 45 16" width="78"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zm23.696-2.2c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61H33.84c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path></svg>
          <svg aria-hidden="true" class="octicon octicon-logo-gist" height="28" version="1.1" viewBox="0 0 25 16" width="40"><path fill-rule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"></path></svg>
</a>
        <div class="site-search js-site-search" role="search">
            <div class="header-search" role="search">

<!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/search" class="position-relative js-quicksearch-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"></div>
  <label class="header-search-wrapper form-control js-chromeless-input-container">
    <input type="text" class="form-control js-site-search-focus header-search-input js-navigation-enable js-quicksearch-field" data-hotkey="s" name="q" placeholder="Search…" tabindex="1" autocorrect="off" autocomplete="off" autocapitalize="off">
  </label>

    <div class="gist-quicksearch-results js-quicksearch-results js-navigation-container" data-quicksearch-url="/search/quick"></div>
</form></div>

        </div>

        <ul class="list-style-none d-flex flex-items-center text-bold pl-2" role="navigation">
          <li><a href="https://gist.github.com/discover" class="HeaderNavlink px-2" data-ga-click="Header, go to all gists, text:all gists">All gists</a></li>
          <li><a href="https://github.com/" class="HeaderNavlink px-2" data-ga-click="Header, go to GitHub, text:GitHub">GitHub</a></li>
        </ul>
      </div>

        <ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
          <li><a href="https://gist.github.com/" class="HeaderNavlink text-bold pr-3" data-ga-click="Header, go to new gist, text:new gist">New gist</a></li>
          <li class="dropdown js-menu-container">
            <button class="btn-link HeaderNavlink name tooltipped tooltipped-sw js-menu-target" type="button" aria-label="View profile and more" aria-expanded="false" aria-haspopup="true" data-ga-click="Header, show menu, icon:avatar">
              <img alt="@RGerboth" class="avatar" height="20" src="./ISOCountryCodes_files/33574853" width="20">
              <span class="dropdown-caret"></span>
            </button>

            <div class="dropdown-menu-content js-menu-content">
              <div class="dropdown-menu dropdown-menu-sw">
                <div class="dropdown-header header-nav-current-user css-truncate">
                  Signed in as <strong class="css-truncate-target">RGerboth</strong>
                </div>
                <div class="dropdown-divider"></div>

                <a class="dropdown-item" href="https://gist.github.com/RGerboth" data-ga-click="Header, go to your gists, text:your gists">
                  Your gists
                </a>

                <a class="dropdown-item" href="https://gist.github.com/RGerboth/starred" data-ga-click="Header, go to starred gists, text:starred gists">
                  Starred gists
                </a>

                <a class="dropdown-item" href="https://help.github.com/" data-ga-click="Header, go to help, text:help">
                  Help
                </a>

                <div class="dropdown-divider"></div>

                <a class="dropdown-item" href="https://github.com/RGerboth" data-ga-click="Header, go to profile, text:your profile">
                  Your GitHub profile
                </a>

                <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/auth/github/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="GZOE01hoytCD0rbuUkbIcb4R+iqHUKdzxZAKMudcxJVpRcfs1tl1GiZ2CnvJfNuiUlYSByYuo1onQEThvp3e2g=="></div>
                  <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
                    Sign out
                  </button>
</form>              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</div>



      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope="" itemtype="http://schema.org/Code">
    <div id="gist-pjax-container" class="gist-content-wrapper" data-pjax-container="">
      




<div class="gisthead pagehead repohead instapaper_ignore readability-menu experiment-repo-nav mb-4">
  <div class="container">
    
  
<div class="container repohead-details-container">

  <ul class="pagehead-actions">


    <li>
        
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/maephisto/9228207/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="9r4vtCvxpG6xuq0wUlSc49GKnS/yg3ZAQJ1kFauogHMNxta/UhaAC3p7kQ30R6otSu/SdL6oHmFSlZxxJCW64Q=="></div>
      <input type="hidden" name="context" value="gist">
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this gist" title="Unstar maephisto/9228207" data-ga-click="Repository, click unstar button, action:gists/gists#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="https://gist.github.com/maephisto/9228207/stargazers" aria-label="87 users starred this repository">
          87
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/maephisto/9228207/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="FZTSBYNFZD4RiPkEsUzVECwX3iB6WO6dlvUx/Ps9/bj7D++RSM4lZbfszM5seur50Wz175an/muDG6DIz5dVrA=="></div>
      <input type="hidden" name="context" value="gist">
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Star this gist" title="Star maephisto/9228207" data-ga-click="Repository, click star button, action:gists/gists#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="https://gist.github.com/maephisto/9228207/stargazers" aria-label="87 users starred this repository">
          87
        </a>
</form>  </div>


    </li>

      <li>
          <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/maephisto/9228207/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="lcC1H9FSKu8APQiux4HSmLiD/P3WLXMsgq53YjKoZyQyLWJPLgUOsM06QYsypW2+EAKOiRi4FwSYmzUJH0U0mg=="></div>
    <button class="btn btn-sm btn-with-count" type="submit">
      <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      Fork
    </button>
      <a class="social-count js-social-count" href="https://gist.github.com/maephisto/9228207/forks" aria-label="27 users forked this gist">
        27
      </a>
</form>
      </li>
  </ul>

  <h1 class="public css-truncate">
    <img alt="@maephisto" class="avatar gist-avatar" height="26" src="./ISOCountryCodes_files/3056582" width="26">
    <span class="author"><a href="https://gist.github.com/maephisto" class="url fn" rel="author"><span itemprop="author">maephisto</span></a></span><!--
        --><span class="path-divider">/</span><!--
        --><strong itemprop="name" class="gist-header-title css-truncate-target"><a href="https://gist.github.com/maephisto/9228207">Javascript ISO country code to country name conversion</a></strong>

    <div class="d-block text-small text-gray">
      Last active <time-ago datetime="2018-01-30T05:20:58Z" title="Jan 29, 2018, 10:20 PM MST">7 days ago</time-ago>
        •
        <!-- '"` --><!-- </textarea></xmp> --><form action="https://gist.github.com/maephisto/9228207/report" class="inline-form" method="post"><div><input aria-label="Report gist as abuse" class="btn-link text-red" data-confirm="Do you want to report the contents of this gist as abuse?" type="submit" value="Report gist"><input name="authenticity_token" type="hidden" value="/KxlsJXifxAdOaWIkEIWHjFavFvl/OgXxhswoHRGBPa8wuFRjYA+G4VrFK/HCLSQGu+rgnWgMM/ula/sc73g2w=="></div></form>
    </div>
  </h1>
</div>

<div class="container gist-file-navigation">
  <div class="float-right file-navigation-options" data-multiple="">

    <div class="file-navigation-option">
  <input type="hidden" name="protocol_type" value="clone">

  <div class="select-menu js-menu-container js-select-menu">
    <div class="input-group js-select-button js-zeroclipboard-container">
      <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone Embed, location:repo overview" aria-expanded="false" aria-haspopup="true">
    Embed
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="&lt;script src=&quot;https://gist.github.com/maephisto/9228207.js&quot;&gt;&lt;/script&gt;" aria-label="Clone this repository at &lt;script src=&quot;https://gist.github.com/maephisto/9228207.js&quot;&gt;&lt;/script&gt;" readonly="">
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
</div>

    </div>

    <div class="select-menu-modal-holder">
      <div class="select-menu-modal js-menu-content">
        <div class="select-menu-header">
          <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
          <span class="select-menu-title">What would you like to do?</span>
        </div>

        <div class="select-menu-list js-navigation-container" role="menu">
            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <div class="select-menu-item-text">
                <input type="radio" name="protocol_selector" value="embed" checked="">
                <span class="select-menu-item-heading">
                  
                  Embed
                </span>
                  <span class="description">
                    Embed this gist in your website.
                  </span>
                <span class="js-select-button-text hidden-select-button-text">
                  <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone Embed, location:repo overview" aria-expanded="false" aria-haspopup="true">
    Embed
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="&lt;script src=&quot;https://gist.github.com/maephisto/9228207.js&quot;&gt;&lt;/script&gt;" aria-label="Clone this repository at &lt;script src=&quot;https://gist.github.com/maephisto/9228207.js&quot;&gt;&lt;/script&gt;" readonly="">
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
</div>

                </span>
              </div>
            </div>
            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <div class="select-menu-item-text">
                <input type="radio" name="protocol_selector" value="share">
                <span class="select-menu-item-heading">
                  
                  Share
                </span>
                  <span class="description">
                    Copy sharable URL for this gist.
                  </span>
                <span class="js-select-button-text hidden-select-button-text">
                  <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone Share, location:repo overview" aria-expanded="false" aria-haspopup="true">
    Share
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://gist.github.com/maephisto/9228207" aria-label="Clone this repository at https://gist.github.com/maephisto/9228207" readonly="">
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
</div>

                </span>
              </div>
            </div>
            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <div class="select-menu-item-text">
                <input type="radio" name="protocol_selector" value="http">
                <span class="select-menu-item-heading">
                  Clone via
                  HTTPS
                </span>
                  <span class="description">
                    Clone with Git or checkout with SVN using the repository's web address.
                  </span>
                <span class="js-select-button-text hidden-select-button-text">
                  <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview" aria-expanded="false" aria-haspopup="true">
    HTTPS
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://gist.github.com/9228207.git" aria-label="Clone this repository at https://gist.github.com/9228207.git" readonly="">
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
</div>

                </span>
              </div>
            </div>
            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <div class="select-menu-item-text">
                <input type="radio" name="protocol_selector" value="ssh">
                <span class="select-menu-item-heading">
                  Clone via
                  SSH
                </span>
                  <span class="description">
                    Clone with an SSH key and passphrase from your GitHub settings.
                  </span>
                <span class="js-select-button-text hidden-select-button-text">
                  <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone SSH, location:repo overview" aria-expanded="false" aria-haspopup="true">
    SSH
  </button>
</div>
<input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="git@gist.github.com:9228207.git" aria-label="Clone this repository at git@gist.github.com:9228207.git" readonly="">
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
</div>

                </span>
              </div>
            </div>
        </div>
        <div class="select-menu-list" role="menu">
          <a class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-question select-menu-item-icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
            <div class="select-menu-item-text">
              Learn more about clone URLs
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


    <div class="file-navigation-option">
    <a href="https://desktop.github.com/" class="btn btn-sm tooltipped tooltipped-s tooltipped-multiline" aria-label="Save maephisto/9228207 to your computer and use it in GitHub Desktop.">
      <svg aria-hidden="true" class="octicon octicon-desktop-download" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"></path></svg>
    </a>
</div>


    <div class="file-navigation-option">
      <a href="https://gist.github.com/maephisto/9228207/archive/62c508a117f50709928b8787aac20d9dcbf07478.zip" class="btn btn-sm" rel="nofollow" data-ga-click="Gist, download zip, location:gist overview">
        Download ZIP
      </a>
    </div>
  </div>

  <div class="float-left">
    <nav class="reponav js-repo-nav js-sidenav-container-pjax" role="navigation" data-pjax="#gist-pjax-container">

  <a href="https://gist.github.com/maephisto/9228207" aria-label="Code" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-pjax="true" data-selected-links="gist_code /maephisto/9228207">
    <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    Code
</a>
    <a href="https://gist.github.com/maephisto/9228207/revisions" aria-label="Revisions" class="js-selected-navigation-item reponav-item" data-hotkey="g r" data-pjax="true" data-selected-links="gist_revisions /maephisto/9228207/revisions">
      <svg aria-hidden="true" class="octicon octicon-git-commit" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path></svg>
      Revisions
      <span class="Counter">4</span>
</a>
    <a href="https://gist.github.com/maephisto/9228207/stargazers" aria-label="Stars" class="js-selected-navigation-item reponav-item" data-hotkey="g s" data-pjax="true" data-selected-links="gist_stars /maephisto/9228207/stargazers">
      <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
      Stars
      <span class="Counter">87</span>
</a>
    <a href="https://gist.github.com/maephisto/9228207/forks" aria-label="Forks" class="js-selected-navigation-item reponav-item" data-hotkey="g f" data-pjax="true" data-selected-links="gist_forks /maephisto/9228207/forks">
      <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      Forks
      <span class="Counter">27</span>
</a></nav>

  </div>
</div>


  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content gist-content">
    
  <div>
    <div class="repository-meta js-details-container Details">
  <div class="repository-meta-content" itemprop="about">
    ISO 3166-1 alpha-2 country code to country name conversion with a simple Javascript implementation, an array and a function.
  </div>
</div>


        <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-javascript-iso-country-code-to-country-name-conversion" class="file">
      <div class="file-header">
        <div class="file-actions">

          <a href="https://gist.github.com/maephisto/9228207/raw/62c508a117f50709928b8787aac20d9dcbf07478/Javascript%2520ISO%2520country%2520code%2520to%2520country%2520name%2520conversion" class="btn btn-sm ">Raw</a>
        </div>
        <div class="file-info">
          <span class="icon">
            <svg aria-hidden="true" class="octicon octicon-gist" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path></svg>
          </span>
          <a class="tooltipped tooltipped-s css-truncate" aria-label="Permalink" href="https://gist.github.com/maephisto/9228207#file-javascript-iso-country-code-to-country-name-conversion">
            <strong class="user-select-contain gist-blob-name css-truncate-target">
              Javascript ISO country code to country name conversion
            </strong>
          </a>
        </div>
      </div>
    

  <div itemprop="text" class="blob-wrapper data type-text">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tbody><tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC1" class="blob-code blob-code-inner js-file-line">var isoCountries = {</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC2" class="blob-code blob-code-inner js-file-line">    'AF' : 'Afghanistan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC3" class="blob-code blob-code-inner js-file-line">    'AX' : 'Aland Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC4" class="blob-code blob-code-inner js-file-line">    'AL' : 'Albania',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC5" class="blob-code blob-code-inner js-file-line">    'DZ' : 'Algeria',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC6" class="blob-code blob-code-inner js-file-line">    'AS' : 'American Samoa',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC7" class="blob-code blob-code-inner js-file-line">    'AD' : 'Andorra',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC8" class="blob-code blob-code-inner js-file-line">    'AO' : 'Angola',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC9" class="blob-code blob-code-inner js-file-line">    'AI' : 'Anguilla',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC10" class="blob-code blob-code-inner js-file-line">    'AQ' : 'Antarctica',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC11" class="blob-code blob-code-inner js-file-line">    'AG' : 'Antigua And Barbuda',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC12" class="blob-code blob-code-inner js-file-line">    'AR' : 'Argentina',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC13" class="blob-code blob-code-inner js-file-line">    'AM' : 'Armenia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC14" class="blob-code blob-code-inner js-file-line">    'AW' : 'Aruba',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC15" class="blob-code blob-code-inner js-file-line">    'AU' : 'Australia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC16" class="blob-code blob-code-inner js-file-line">    'AT' : 'Austria',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC17" class="blob-code blob-code-inner js-file-line">    'AZ' : 'Azerbaijan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC18" class="blob-code blob-code-inner js-file-line">    'BS' : 'Bahamas',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC19" class="blob-code blob-code-inner js-file-line">    'BH' : 'Bahrain',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC20" class="blob-code blob-code-inner js-file-line">    'BD' : 'Bangladesh',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC21" class="blob-code blob-code-inner js-file-line">    'BB' : 'Barbados',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC22" class="blob-code blob-code-inner js-file-line">    'BY' : 'Belarus',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC23" class="blob-code blob-code-inner js-file-line">    'BE' : 'Belgium',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC24" class="blob-code blob-code-inner js-file-line">    'BZ' : 'Belize',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC25" class="blob-code blob-code-inner js-file-line">    'BJ' : 'Benin',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC26" class="blob-code blob-code-inner js-file-line">    'BM' : 'Bermuda',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC27" class="blob-code blob-code-inner js-file-line">    'BT' : 'Bhutan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC28" class="blob-code blob-code-inner js-file-line">    'BO' : 'Bolivia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC29" class="blob-code blob-code-inner js-file-line">    'BA' : 'Bosnia And Herzegovina',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC30" class="blob-code blob-code-inner js-file-line">    'BW' : 'Botswana',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC31" class="blob-code blob-code-inner js-file-line">    'BV' : 'Bouvet Island',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC32" class="blob-code blob-code-inner js-file-line">    'BR' : 'Brazil',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC33" class="blob-code blob-code-inner js-file-line">    'IO' : 'British Indian Ocean Territory',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC34" class="blob-code blob-code-inner js-file-line">    'BN' : 'Brunei Darussalam',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC35" class="blob-code blob-code-inner js-file-line">    'BG' : 'Bulgaria',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC36" class="blob-code blob-code-inner js-file-line">    'BF' : 'Burkina Faso',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC37" class="blob-code blob-code-inner js-file-line">    'BI' : 'Burundi',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC38" class="blob-code blob-code-inner js-file-line">    'KH' : 'Cambodia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC39" class="blob-code blob-code-inner js-file-line">    'CM' : 'Cameroon',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC40" class="blob-code blob-code-inner js-file-line">    'CA' : 'Canada',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC41" class="blob-code blob-code-inner js-file-line">    'CV' : 'Cape Verde',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC42" class="blob-code blob-code-inner js-file-line">    'KY' : 'Cayman Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC43" class="blob-code blob-code-inner js-file-line">    'CF' : 'Central African Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC44" class="blob-code blob-code-inner js-file-line">    'TD' : 'Chad',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC45" class="blob-code blob-code-inner js-file-line">    'CL' : 'Chile',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC46" class="blob-code blob-code-inner js-file-line">    'CN' : 'China',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC47" class="blob-code blob-code-inner js-file-line">    'CX' : 'Christmas Island',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC48" class="blob-code blob-code-inner js-file-line">    'CC' : 'Cocos (Keeling) Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC49" class="blob-code blob-code-inner js-file-line">    'CO' : 'Colombia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC50" class="blob-code blob-code-inner js-file-line">    'KM' : 'Comoros',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC51" class="blob-code blob-code-inner js-file-line">    'CG' : 'Congo',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC52" class="blob-code blob-code-inner js-file-line">    'CD' : 'Congo, Democratic Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC53" class="blob-code blob-code-inner js-file-line">    'CK' : 'Cook Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC54" class="blob-code blob-code-inner js-file-line">    'CR' : 'Costa Rica',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC55" class="blob-code blob-code-inner js-file-line">    'CI' : 'Cote D\'Ivoire',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC56" class="blob-code blob-code-inner js-file-line">    'HR' : 'Croatia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC57" class="blob-code blob-code-inner js-file-line">    'CU' : 'Cuba',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC58" class="blob-code blob-code-inner js-file-line">    'CY' : 'Cyprus',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC59" class="blob-code blob-code-inner js-file-line">    'CZ' : 'Czech Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC60" class="blob-code blob-code-inner js-file-line">    'DK' : 'Denmark',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC61" class="blob-code blob-code-inner js-file-line">    'DJ' : 'Djibouti',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC62" class="blob-code blob-code-inner js-file-line">    'DM' : 'Dominica',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC63" class="blob-code blob-code-inner js-file-line">    'DO' : 'Dominican Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC64" class="blob-code blob-code-inner js-file-line">    'EC' : 'Ecuador',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC65" class="blob-code blob-code-inner js-file-line">    'EG' : 'Egypt',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC66" class="blob-code blob-code-inner js-file-line">    'SV' : 'El Salvador',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC67" class="blob-code blob-code-inner js-file-line">    'GQ' : 'Equatorial Guinea',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC68" class="blob-code blob-code-inner js-file-line">    'ER' : 'Eritrea',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC69" class="blob-code blob-code-inner js-file-line">    'EE' : 'Estonia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC70" class="blob-code blob-code-inner js-file-line">    'ET' : 'Ethiopia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC71" class="blob-code blob-code-inner js-file-line">    'FK' : 'Falkland Islands (Malvinas)',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC72" class="blob-code blob-code-inner js-file-line">    'FO' : 'Faroe Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC73" class="blob-code blob-code-inner js-file-line">    'FJ' : 'Fiji',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC74" class="blob-code blob-code-inner js-file-line">    'FI' : 'Finland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC75" class="blob-code blob-code-inner js-file-line">    'FR' : 'France',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC76" class="blob-code blob-code-inner js-file-line">    'GF' : 'French Guiana',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC77" class="blob-code blob-code-inner js-file-line">    'PF' : 'French Polynesia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC78" class="blob-code blob-code-inner js-file-line">    'TF' : 'French Southern Territories',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC79" class="blob-code blob-code-inner js-file-line">    'GA' : 'Gabon',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC80" class="blob-code blob-code-inner js-file-line">    'GM' : 'Gambia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC81" class="blob-code blob-code-inner js-file-line">    'GE' : 'Georgia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC82" class="blob-code blob-code-inner js-file-line">    'DE' : 'Germany',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC83" class="blob-code blob-code-inner js-file-line">    'GH' : 'Ghana',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC84" class="blob-code blob-code-inner js-file-line">    'GI' : 'Gibraltar',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC85" class="blob-code blob-code-inner js-file-line">    'GR' : 'Greece',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC86" class="blob-code blob-code-inner js-file-line">    'GL' : 'Greenland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC87" class="blob-code blob-code-inner js-file-line">    'GD' : 'Grenada',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC88" class="blob-code blob-code-inner js-file-line">    'GP' : 'Guadeloupe',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC89" class="blob-code blob-code-inner js-file-line">    'GU' : 'Guam',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC90" class="blob-code blob-code-inner js-file-line">    'GT' : 'Guatemala',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC91" class="blob-code blob-code-inner js-file-line">    'GG' : 'Guernsey',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC92" class="blob-code blob-code-inner js-file-line">    'GN' : 'Guinea',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC93" class="blob-code blob-code-inner js-file-line">    'GW' : 'Guinea-Bissau',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC94" class="blob-code blob-code-inner js-file-line">    'GY' : 'Guyana',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC95" class="blob-code blob-code-inner js-file-line">    'HT' : 'Haiti',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC96" class="blob-code blob-code-inner js-file-line">    'HM' : 'Heard Island &amp; Mcdonald Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC97" class="blob-code blob-code-inner js-file-line">    'VA' : 'Holy See (Vatican City State)',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC98" class="blob-code blob-code-inner js-file-line">    'HN' : 'Honduras',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC99" class="blob-code blob-code-inner js-file-line">    'HK' : 'Hong Kong',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC100" class="blob-code blob-code-inner js-file-line">    'HU' : 'Hungary',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC101" class="blob-code blob-code-inner js-file-line">    'IS' : 'Iceland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC102" class="blob-code blob-code-inner js-file-line">    'IN' : 'India',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC103" class="blob-code blob-code-inner js-file-line">    'ID' : 'Indonesia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC104" class="blob-code blob-code-inner js-file-line">    'IR' : 'Iran, Islamic Republic Of',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC105" class="blob-code blob-code-inner js-file-line">    'IQ' : 'Iraq',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC106" class="blob-code blob-code-inner js-file-line">    'IE' : 'Ireland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC107" class="blob-code blob-code-inner js-file-line">    'IM' : 'Isle Of Man',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC108" class="blob-code blob-code-inner js-file-line">    'IL' : 'Israel',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC109" class="blob-code blob-code-inner js-file-line">    'IT' : 'Italy',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC110" class="blob-code blob-code-inner js-file-line">    'JM' : 'Jamaica',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC111" class="blob-code blob-code-inner js-file-line">    'JP' : 'Japan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC112" class="blob-code blob-code-inner js-file-line">    'JE' : 'Jersey',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC113" class="blob-code blob-code-inner js-file-line">    'JO' : 'Jordan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC114" class="blob-code blob-code-inner js-file-line">    'KZ' : 'Kazakhstan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC115" class="blob-code blob-code-inner js-file-line">    'KE' : 'Kenya',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC116" class="blob-code blob-code-inner js-file-line">    'KI' : 'Kiribati',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC117" class="blob-code blob-code-inner js-file-line">    'KR' : 'Korea',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC118" class="blob-code blob-code-inner js-file-line">    'KW' : 'Kuwait',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC119" class="blob-code blob-code-inner js-file-line">    'KG' : 'Kyrgyzstan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC120" class="blob-code blob-code-inner js-file-line">    'LA' : 'Lao People\'s Democratic Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC121" class="blob-code blob-code-inner js-file-line">    'LV' : 'Latvia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC122" class="blob-code blob-code-inner js-file-line">    'LB' : 'Lebanon',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC123" class="blob-code blob-code-inner js-file-line">    'LS' : 'Lesotho',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC124" class="blob-code blob-code-inner js-file-line">    'LR' : 'Liberia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC125" class="blob-code blob-code-inner js-file-line">    'LY' : 'Libyan Arab Jamahiriya',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC126" class="blob-code blob-code-inner js-file-line">    'LI' : 'Liechtenstein',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC127" class="blob-code blob-code-inner js-file-line">    'LT' : 'Lithuania',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC128" class="blob-code blob-code-inner js-file-line">    'LU' : 'Luxembourg',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC129" class="blob-code blob-code-inner js-file-line">    'MO' : 'Macao',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC130" class="blob-code blob-code-inner js-file-line">    'MK' : 'Macedonia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC131" class="blob-code blob-code-inner js-file-line">    'MG' : 'Madagascar',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC132" class="blob-code blob-code-inner js-file-line">    'MW' : 'Malawi',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC133" class="blob-code blob-code-inner js-file-line">    'MY' : 'Malaysia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC134" class="blob-code blob-code-inner js-file-line">    'MV' : 'Maldives',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC135" class="blob-code blob-code-inner js-file-line">    'ML' : 'Mali',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC136" class="blob-code blob-code-inner js-file-line">    'MT' : 'Malta',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC137" class="blob-code blob-code-inner js-file-line">    'MH' : 'Marshall Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC138" class="blob-code blob-code-inner js-file-line">    'MQ' : 'Martinique',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC139" class="blob-code blob-code-inner js-file-line">    'MR' : 'Mauritania',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC140" class="blob-code blob-code-inner js-file-line">    'MU' : 'Mauritius',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC141" class="blob-code blob-code-inner js-file-line">    'YT' : 'Mayotte',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC142" class="blob-code blob-code-inner js-file-line">    'MX' : 'Mexico',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC143" class="blob-code blob-code-inner js-file-line">    'FM' : 'Micronesia, Federated States Of',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC144" class="blob-code blob-code-inner js-file-line">    'MD' : 'Moldova',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC145" class="blob-code blob-code-inner js-file-line">    'MC' : 'Monaco',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC146" class="blob-code blob-code-inner js-file-line">    'MN' : 'Mongolia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC147" class="blob-code blob-code-inner js-file-line">    'ME' : 'Montenegro',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC148" class="blob-code blob-code-inner js-file-line">    'MS' : 'Montserrat',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC149" class="blob-code blob-code-inner js-file-line">    'MA' : 'Morocco',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC150" class="blob-code blob-code-inner js-file-line">    'MZ' : 'Mozambique',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC151" class="blob-code blob-code-inner js-file-line">    'MM' : 'Myanmar',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC152" class="blob-code blob-code-inner js-file-line">    'NA' : 'Namibia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC153" class="blob-code blob-code-inner js-file-line">    'NR' : 'Nauru',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC154" class="blob-code blob-code-inner js-file-line">    'NP' : 'Nepal',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC155" class="blob-code blob-code-inner js-file-line">    'NL' : 'Netherlands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC156" class="blob-code blob-code-inner js-file-line">    'AN' : 'Netherlands Antilles',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC157" class="blob-code blob-code-inner js-file-line">    'NC' : 'New Caledonia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC158" class="blob-code blob-code-inner js-file-line">    'NZ' : 'New Zealand',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC159" class="blob-code blob-code-inner js-file-line">    'NI' : 'Nicaragua',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC160" class="blob-code blob-code-inner js-file-line">    'NE' : 'Niger',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC161" class="blob-code blob-code-inner js-file-line">    'NG' : 'Nigeria',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC162" class="blob-code blob-code-inner js-file-line">    'NU' : 'Niue',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC163" class="blob-code blob-code-inner js-file-line">    'NF' : 'Norfolk Island',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC164" class="blob-code blob-code-inner js-file-line">    'MP' : 'Northern Mariana Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC165" class="blob-code blob-code-inner js-file-line">    'NO' : 'Norway',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC166" class="blob-code blob-code-inner js-file-line">    'OM' : 'Oman',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC167" class="blob-code blob-code-inner js-file-line">    'PK' : 'Pakistan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC168" class="blob-code blob-code-inner js-file-line">    'PW' : 'Palau',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC169" class="blob-code blob-code-inner js-file-line">    'PS' : 'Palestinian Territory, Occupied',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC170" class="blob-code blob-code-inner js-file-line">    'PA' : 'Panama',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC171" class="blob-code blob-code-inner js-file-line">    'PG' : 'Papua New Guinea',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC172" class="blob-code blob-code-inner js-file-line">    'PY' : 'Paraguay',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC173" class="blob-code blob-code-inner js-file-line">    'PE' : 'Peru',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC174" class="blob-code blob-code-inner js-file-line">    'PH' : 'Philippines',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC175" class="blob-code blob-code-inner js-file-line">    'PN' : 'Pitcairn',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC176" class="blob-code blob-code-inner js-file-line">    'PL' : 'Poland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC177" class="blob-code blob-code-inner js-file-line">    'PT' : 'Portugal',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC178" class="blob-code blob-code-inner js-file-line">    'PR' : 'Puerto Rico',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC179" class="blob-code blob-code-inner js-file-line">    'QA' : 'Qatar',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC180" class="blob-code blob-code-inner js-file-line">    'RE' : 'Reunion',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC181" class="blob-code blob-code-inner js-file-line">    'RO' : 'Romania',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC182" class="blob-code blob-code-inner js-file-line">    'RU' : 'Russian Federation',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC183" class="blob-code blob-code-inner js-file-line">    'RW' : 'Rwanda',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC184" class="blob-code blob-code-inner js-file-line">    'BL' : 'Saint Barthelemy',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC185" class="blob-code blob-code-inner js-file-line">    'SH' : 'Saint Helena',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC186" class="blob-code blob-code-inner js-file-line">    'KN' : 'Saint Kitts And Nevis',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC187" class="blob-code blob-code-inner js-file-line">    'LC' : 'Saint Lucia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC188" class="blob-code blob-code-inner js-file-line">    'MF' : 'Saint Martin',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC189" class="blob-code blob-code-inner js-file-line">    'PM' : 'Saint Pierre And Miquelon',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC190" class="blob-code blob-code-inner js-file-line">    'VC' : 'Saint Vincent And Grenadines',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC191" class="blob-code blob-code-inner js-file-line">    'WS' : 'Samoa',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC192" class="blob-code blob-code-inner js-file-line">    'SM' : 'San Marino',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC193" class="blob-code blob-code-inner js-file-line">    'ST' : 'Sao Tome And Principe',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC194" class="blob-code blob-code-inner js-file-line">    'SA' : 'Saudi Arabia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC195" class="blob-code blob-code-inner js-file-line">    'SN' : 'Senegal',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC196" class="blob-code blob-code-inner js-file-line">    'RS' : 'Serbia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC197" class="blob-code blob-code-inner js-file-line">    'SC' : 'Seychelles',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC198" class="blob-code blob-code-inner js-file-line">    'SL' : 'Sierra Leone',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC199" class="blob-code blob-code-inner js-file-line">    'SG' : 'Singapore',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC200" class="blob-code blob-code-inner js-file-line">    'SK' : 'Slovakia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC201" class="blob-code blob-code-inner js-file-line">    'SI' : 'Slovenia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC202" class="blob-code blob-code-inner js-file-line">    'SB' : 'Solomon Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC203" class="blob-code blob-code-inner js-file-line">    'SO' : 'Somalia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC204" class="blob-code blob-code-inner js-file-line">    'ZA' : 'South Africa',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC205" class="blob-code blob-code-inner js-file-line">    'GS' : 'South Georgia And Sandwich Isl.',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC206" class="blob-code blob-code-inner js-file-line">    'ES' : 'Spain',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC207" class="blob-code blob-code-inner js-file-line">    'LK' : 'Sri Lanka',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC208" class="blob-code blob-code-inner js-file-line">    'SD' : 'Sudan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC209" class="blob-code blob-code-inner js-file-line">    'SR' : 'Suriname',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC210" class="blob-code blob-code-inner js-file-line">    'SJ' : 'Svalbard And Jan Mayen',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC211" class="blob-code blob-code-inner js-file-line">    'SZ' : 'Swaziland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC212" class="blob-code blob-code-inner js-file-line">    'SE' : 'Sweden',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC213" class="blob-code blob-code-inner js-file-line">    'CH' : 'Switzerland',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC214" class="blob-code blob-code-inner js-file-line">    'SY' : 'Syrian Arab Republic',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC215" class="blob-code blob-code-inner js-file-line">    'TW' : 'Taiwan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC216" class="blob-code blob-code-inner js-file-line">    'TJ' : 'Tajikistan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC217" class="blob-code blob-code-inner js-file-line">    'TZ' : 'Tanzania',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC218" class="blob-code blob-code-inner js-file-line">    'TH' : 'Thailand',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC219" class="blob-code blob-code-inner js-file-line">    'TL' : 'Timor-Leste',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC220" class="blob-code blob-code-inner js-file-line">    'TG' : 'Togo',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC221" class="blob-code blob-code-inner js-file-line">    'TK' : 'Tokelau',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC222" class="blob-code blob-code-inner js-file-line">    'TO' : 'Tonga',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC223" class="blob-code blob-code-inner js-file-line">    'TT' : 'Trinidad And Tobago',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC224" class="blob-code blob-code-inner js-file-line">    'TN' : 'Tunisia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC225" class="blob-code blob-code-inner js-file-line">    'TR' : 'Turkey',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC226" class="blob-code blob-code-inner js-file-line">    'TM' : 'Turkmenistan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC227" class="blob-code blob-code-inner js-file-line">    'TC' : 'Turks And Caicos Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC228" class="blob-code blob-code-inner js-file-line">    'TV' : 'Tuvalu',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC229" class="blob-code blob-code-inner js-file-line">    'UG' : 'Uganda',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC230" class="blob-code blob-code-inner js-file-line">    'UA' : 'Ukraine',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC231" class="blob-code blob-code-inner js-file-line">    'AE' : 'United Arab Emirates',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC232" class="blob-code blob-code-inner js-file-line">    'GB' : 'United Kingdom',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC233" class="blob-code blob-code-inner js-file-line">    'US' : 'United States',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC234" class="blob-code blob-code-inner js-file-line">    'UM' : 'United States Outlying Islands',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC235" class="blob-code blob-code-inner js-file-line">    'UY' : 'Uruguay',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC236" class="blob-code blob-code-inner js-file-line">    'UZ' : 'Uzbekistan',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC237" class="blob-code blob-code-inner js-file-line">    'VU' : 'Vanuatu',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC238" class="blob-code blob-code-inner js-file-line">    'VE' : 'Venezuela',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC239" class="blob-code blob-code-inner js-file-line">    'VN' : 'Viet Nam',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC240" class="blob-code blob-code-inner js-file-line">    'VG' : 'Virgin Islands, British',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC241" class="blob-code blob-code-inner js-file-line">    'VI' : 'Virgin Islands, U.S.',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC242" class="blob-code blob-code-inner js-file-line">    'WF' : 'Wallis And Futuna',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC243" class="blob-code blob-code-inner js-file-line">    'EH' : 'Western Sahara',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC244" class="blob-code blob-code-inner js-file-line">    'YE' : 'Yemen',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC245" class="blob-code blob-code-inner js-file-line">    'ZM' : 'Zambia',</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC246" class="blob-code blob-code-inner js-file-line">    'ZW' : 'Zimbabwe'</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC247" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC249" class="blob-code blob-code-inner js-file-line">function getCountryName (countryCode) {</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC250" class="blob-code blob-code-inner js-file-line">    if (isoCountries.hasOwnProperty(countryCode)) {</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC251" class="blob-code blob-code-inner js-file-line">        return isoCountries[countryCode];</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC252" class="blob-code blob-code-inner js-file-line">    } else {</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC253" class="blob-code blob-code-inner js-file-line">        return countryCode;</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC254" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="file-javascript-iso-country-code-to-country-name-conversion-LC255" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</tbody></table>


  </div>

  </div>
  
</div>


    <a name="comments"></a>
    <div class="discussion-timeline gist-discussion-timeline js-quote-selection-container ">
      <div class="js-discussion js-socket-channel" data-channel="marked-as-read:gist:9228207">
        

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/klagithub1">
        <img alt="@klagithub1" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/2163131" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1445487" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="04eb35c87ee46028dde149746858dbbc">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/klagithub1" class="author text-inherit">klagithub1</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1445487" class="timestamp"><relative-time datetime="2015-05-03T20:49:03Z" title="May 3, 2015, 2:49 PM MDT">on May 3, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>thx !</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/4gus71n">
        <img alt="@4gus71n" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/2055468" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1457496" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="4385cc6e56008b15876fd49c9a569106">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/4gus71n" class="author text-inherit">4gus71n</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1457496" class="timestamp"><relative-time datetime="2015-05-20T16:32:32Z" title="May 20, 2015, 10:32 AM MDT">on May 20, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Thanks!</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/zenvarlab">
        <img alt="@zenvarlab" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/2082256" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1465837" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="029d39c478b10569b2ac4d8647d2ffdb">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/zenvarlab" class="author text-inherit">zenvarlab</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1465837" class="timestamp"><relative-time datetime="2015-06-03T03:07:44Z" title="Jun 2, 2015, 9:07 PM MDT">on Jun 2, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>many thanks I fork it</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/mustbebuilt">
        <img alt="@mustbebuilt" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/6534423" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1471858" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="d58db03fe67838f586651351fa7cac41">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/mustbebuilt" class="author text-inherit">mustbebuilt</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1471858" class="timestamp"><relative-time datetime="2015-06-11T20:21:23Z" title="Jun 11, 2015, 2:21 PM MDT">on Jun 11, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>For anyone using knockout.js try:</p>
<pre><code>&lt;select data-bind="options: availableCountries, optionsText: 'cname', optionsValue: 'ccode'"&gt;

&lt;/select&gt;



&lt;script src="../js/knockout-3.3.0.js"&gt;&lt;/script&gt;
&lt;script&gt;
var isoCountries = [
    {'ccode' : 'AF', 'cname' : 'Afghanistan'},
    {'ccode' : 'AX', 'cname' : 'Aland Islands'},
    {'ccode' : 'AL', 'cname' : 'Albania'},
    {'ccode' : 'DZ', 'cname' : 'Algeria'},
    {'ccode' : 'AS', 'cname' : 'American Samoa'},
    {'ccode' : 'AD', 'cname' : 'Andorra'},
    {'ccode' : 'AO', 'cname' : 'Angola'},
    {'ccode' : 'AI', 'cname' : 'Anguilla'},
    {'ccode' : 'AQ', 'cname' : 'Antarctica'},
    {'ccode' : 'AG', 'cname' : 'Antigua And Barbuda'},
    {'ccode' : 'AR', 'cname' : 'Argentina'},
    {'ccode' : 'AM', 'cname' : 'Armenia'},
    {'ccode' : 'AW', 'cname' : 'Aruba'},
    {'ccode' : 'AU', 'cname' : 'Australia'},
    {'ccode' : 'AT', 'cname' : 'Austria'},
    {'ccode' : 'AZ', 'cname' : 'Azerbaijan'},
    {'ccode' : 'BS', 'cname' : 'Bahamas'},
    {'ccode' : 'BH', 'cname' : 'Bahrain'},
    {'ccode' : 'BD', 'cname' : 'Bangladesh'},
    {'ccode' : 'BB', 'cname' : 'Barbados'},
    {'ccode' : 'BY', 'cname' : 'Belarus'},
    {'ccode' : 'BE', 'cname' : 'Belgium'},
    {'ccode' : 'BZ', 'cname' : 'Belize'},
    {'ccode' : 'BJ', 'cname' : 'Benin'},
    {'ccode' : 'BM', 'cname' : 'Bermuda'},
    {'ccode' : 'BT', 'cname' : 'Bhutan'},
    {'ccode' : 'BO', 'cname' : 'Bolivia'},
    {'ccode' : 'BA', 'cname' : 'Bosnia And Herzegovina'},
    {'ccode' : 'BW', 'cname' : 'Botswana'},
    {'ccode' : 'BV', 'cname' : 'Bouvet Island'},
    {'ccode' : 'BR', 'cname' : 'Brazil'},
    {'ccode' : 'IO', 'cname' : 'British Indian Ocean Territory'},
    {'ccode' : 'BN', 'cname' : 'Brunei Darussalam'},
    {'ccode' : 'BG', 'cname' : 'Bulgaria'},
    {'ccode' : 'BF', 'cname' : 'Burkina Faso'},
    {'ccode' : 'BI', 'cname' : 'Burundi'},
    {'ccode' : 'KH', 'cname' : 'Cambodia'},
    {'ccode' : 'CM', 'cname' : 'Cameroon'},
    {'ccode' : 'CA', 'cname' : 'Canada'},
    {'ccode' : 'CV', 'cname' : 'Cape Verde'},
    {'ccode' : 'KY', 'cname' : 'Cayman Islands'},
    {'ccode' : 'CF', 'cname' : 'Central African Republic'},
    {'ccode' : 'TD', 'cname' : 'Chad'},
    {'ccode' : 'CL', 'cname' : 'Chile'},
    {'ccode' : 'CN', 'cname' : 'China'},
    {'ccode' : 'CX', 'cname' : 'Christmas Island'},
    {'ccode' : 'CC', 'cname' : 'Cocos (Keeling) Islands'},
    {'ccode' : 'CO', 'cname' : 'Colombia'},
    {'ccode' : 'KM', 'cname' : 'Comoros'},
    {'ccode' : 'CG', 'cname' : 'Congo'},
    {'ccode' : 'CD', 'cname' : 'Congo, Democratic Republic'},
    {'ccode' : 'CK', 'cname' : 'Cook Islands'},
    {'ccode' : 'CR', 'cname' : 'Costa Rica'},
    {'ccode' : 'CI', 'cname' : 'Cote D\'Ivoire'},
    {'ccode' : 'HR', 'cname' : 'Croatia'},
    {'ccode' : 'CU', 'cname' : 'Cuba'},
    {'ccode' : 'CY', 'cname' : 'Cyprus'},
    {'ccode' : 'CZ', 'cname' : 'Czech Republic'},
    {'ccode' : 'DK', 'cname' : 'Denmark'},
    {'ccode' : 'DJ', 'cname' : 'Djibouti'},
    {'ccode' : 'DM', 'cname' : 'Dominica'},
    {'ccode' : 'DO', 'cname' : 'Dominican Republic'},
    {'ccode' : 'EC', 'cname' : 'Ecuador'},
    {'ccode' : 'EG', 'cname' : 'Egypt'},
    {'ccode' : 'SV', 'cname' : 'El Salvador'},
    {'ccode' : 'GQ', 'cname' : 'Equatorial Guinea'},
    {'ccode' : 'ER', 'cname' : 'Eritrea'},
    {'ccode' : 'EE', 'cname' : 'Estonia'},
    {'ccode' : 'ET', 'cname' : 'Ethiopia'},
    {'ccode' : 'FK', 'cname' : 'Falkland Islands (Malvinas)'},
    {'ccode' : 'FO', 'cname' : 'Faroe Islands'},
    {'ccode' : 'FJ', 'cname' : 'Fiji'},
    {'ccode' : 'FI', 'cname' : 'Finland'},
    {'ccode' : 'FR', 'cname' : 'France'},
    {'ccode' : 'GF', 'cname' : 'French Guiana'},
    {'ccode' : 'PF', 'cname' : 'French Polynesia'},
    {'ccode' : 'TF', 'cname' : 'French Southern Territories'},
    {'ccode' : 'GA', 'cname' : 'Gabon'},
    {'ccode' : 'GM', 'cname' : 'Gambia'},
    {'ccode' : 'GE', 'cname' : 'Georgia'},
    {'ccode' : 'DE', 'cname' : 'Germany'},
    {'ccode' : 'GH', 'cname' : 'Ghana'},
    {'ccode' : 'GI', 'cname' : 'Gibraltar'},
    {'ccode' : 'GR', 'cname' : 'Greece'},
    {'ccode' : 'GL', 'cname' : 'Greenland'},
    {'ccode' : 'GD', 'cname' : 'Grenada'},
    {'ccode' : 'GP', 'cname' : 'Guadeloupe'},
    {'ccode' : 'GU', 'cname' : 'Guam'},
    {'ccode' : 'GT', 'cname' : 'Guatemala'},
    {'ccode' : 'GG', 'cname' : 'Guernsey'},
    {'ccode' : 'GN', 'cname' : 'Guinea'},
    {'ccode' : 'GW', 'cname' : 'Guinea-Bissau'},
    {'ccode' : 'GY', 'cname' : 'Guyana'},
    {'ccode' : 'HT', 'cname' : 'Haiti'},
    {'ccode' : 'HM', 'cname' : 'Heard Island &amp; Mcdonald Islands'},
    {'ccode' : 'VA', 'cname' : 'Holy See (Vatican City State)'},
    {'ccode' : 'HN', 'cname' : 'Honduras'},
    {'ccode' : 'HK', 'cname' : 'Hong Kong'},
    {'ccode' : 'HU', 'cname' : 'Hungary'},
    {'ccode' : 'IS', 'cname' : 'Iceland'},
    {'ccode' : 'IN', 'cname' : 'India'},
    {'ccode' : 'ID', 'cname' : 'Indonesia'},
    {'ccode' : 'IR', 'cname' : 'Iran, Islamic Republic Of'},
    {'ccode' : 'IQ', 'cname' : 'Iraq'},
    {'ccode' : 'IE', 'cname' : 'Ireland'},
    {'ccode' : 'IM', 'cname' : 'Isle Of Man'},
    {'ccode' : 'IL', 'cname' : 'Israel'},
    {'ccode' : 'IT', 'cname' : 'Italy'},
    {'ccode' : 'JM', 'cname' : 'Jamaica'},
    {'ccode' : 'JP', 'cname' : 'Japan'},
    {'ccode' : 'JE', 'cname' : 'Jersey'},
    {'ccode' : 'JO', 'cname' : 'Jordan'},
    {'ccode' : 'KZ', 'cname' : 'Kazakhstan'},
    {'ccode' : 'KE', 'cname' : 'Kenya'},
    {'ccode' : 'KI', 'cname' : 'Kiribati'},
    {'ccode' : 'KR', 'cname' : 'Korea'},
    {'ccode' : 'KW', 'cname' : 'Kuwait'},
    {'ccode' : 'KG', 'cname' : 'Kyrgyzstan'},
    {'ccode' : 'LA', 'cname' : 'Lao People\'s Democratic Republic'},
    {'ccode' : 'LV', 'cname' : 'Latvia'},
    {'ccode' : 'LB', 'cname' : 'Lebanon'},
    {'ccode' : 'LS', 'cname' : 'Lesotho'},
    {'ccode' : 'LR', 'cname' : 'Liberia'},
    {'ccode' : 'LY', 'cname' : 'Libyan Arab Jamahiriya'},
    {'ccode' : 'LI', 'cname' : 'Liechtenstein'},
    {'ccode' : 'LT', 'cname' : 'Lithuania'},
    {'ccode' : 'LU', 'cname' : 'Luxembourg'},
    {'ccode' : 'MO', 'cname' : 'Macao'},
    {'ccode' : 'MK', 'cname' : 'Macedonia'},
    {'ccode' : 'MG', 'cname' : 'Madagascar'},
    {'ccode' : 'MW', 'cname' : 'Malawi'},
    {'ccode' : 'MY', 'cname' : 'Malaysia'},
    {'ccode' : 'MV', 'cname' : 'Maldives'},
    {'ccode' : 'ML', 'cname' : 'Mali'},
    {'ccode' : 'MT', 'cname' : 'Malta'},
    {'ccode' : 'MH', 'cname' : 'Marshall Islands'},
    {'ccode' : 'MQ', 'cname' : 'Martinique'},
    {'ccode' : 'MR', 'cname' : 'Mauritania'},
    {'ccode' : 'MU', 'cname' : 'Mauritius'},
    {'ccode' : 'YT', 'cname' : 'Mayotte'},
    {'ccode' : 'MX', 'cname' : 'Mexico'},
    {'ccode' : 'FM', 'cname' : 'Micronesia, Federated States Of'},
    {'ccode' : 'MD', 'cname' : 'Moldova'},
    {'ccode' : 'MC', 'cname' : 'Monaco'},
    {'ccode' : 'MN', 'cname' : 'Mongolia'},
    {'ccode' : 'ME', 'cname' : 'Montenegro'},
    {'ccode' : 'MS', 'cname' : 'Montserrat'},
    {'ccode' : 'MA', 'cname' : 'Morocco'},
    {'ccode' : 'MZ', 'cname' : 'Mozambique'},
    {'ccode' : 'MM', 'cname' : 'Myanmar'},
    {'ccode' : 'NA', 'cname' : 'Namibia'},
    {'ccode' : 'NR', 'cname' : 'Nauru'},
    {'ccode' : 'NP', 'cname' : 'Nepal'},
    {'ccode' : 'NL', 'cname' : 'Netherlands'},
    {'ccode' : 'AN', 'cname' : 'Netherlands Antilles'},
    {'ccode' : 'NC', 'cname' : 'New Caledonia'},
    {'ccode' : 'NZ', 'cname' : 'New Zealand'},
    {'ccode' : 'NI', 'cname' : 'Nicaragua'},
    {'ccode' : 'NE', 'cname' : 'Niger'},
    {'ccode' : 'NG', 'cname' : 'Nigeria'},
    {'ccode' : 'NU', 'cname' : 'Niue'},
    {'ccode' : 'NF', 'cname' : 'Norfolk Island'},
    {'ccode' : 'MP', 'cname' : 'Northern Mariana Islands'},
    {'ccode' : 'NO', 'cname' : 'Norway'},
    {'ccode' : 'OM', 'cname' : 'Oman'},
    {'ccode' : 'PK', 'cname' : 'Pakistan'},
    {'ccode' : 'PW', 'cname' : 'Palau'},
    {'ccode' : 'PS', 'cname' : 'Palestinian Territory, Occupied'},
    {'ccode' : 'PA', 'cname' : 'Panama'},
    {'ccode' : 'PG', 'cname' : 'Papua New Guinea'},
    {'ccode' : 'PY', 'cname' : 'Paraguay'},
    {'ccode' : 'PE', 'cname' : 'Peru'},
    {'ccode' : 'PH', 'cname' : 'Philippines'},
    {'ccode' : 'PN', 'cname' : 'Pitcairn'},
    {'ccode' : 'PL', 'cname' : 'Poland'},
    {'ccode' : 'PT', 'cname' : 'Portugal'},
    {'ccode' : 'PR', 'cname' : 'Puerto Rico'},
    {'ccode' : 'QA', 'cname' : 'Qatar'},
    {'ccode' : 'RE', 'cname' : 'Reunion'},
    {'ccode' : 'RO', 'cname' : 'Romania'},
    {'ccode' : 'RU', 'cname' : 'Russian Federation'},
    {'ccode' : 'RW', 'cname' : 'Rwanda'},
    {'ccode' : 'BL', 'cname' : 'Saint Barthelemy'},
    {'ccode' : 'SH', 'cname' : 'Saint Helena'},
    {'ccode' : 'KN', 'cname' : 'Saint Kitts And Nevis'},
    {'ccode' : 'LC', 'cname' : 'Saint Lucia'},
    {'ccode' : 'MF', 'cname' : 'Saint Martin'},
    {'ccode' : 'PM', 'cname' : 'Saint Pierre And Miquelon'},
    {'ccode' : 'VC', 'cname' : 'Saint Vincent And Grenadines'},
    {'ccode' : 'WS', 'cname' : 'Samoa'},
    {'ccode' : 'SM', 'cname' : 'San Marino'},
    {'ccode' : 'ST', 'cname' : 'Sao Tome And Principe'},
    {'ccode' : 'SA', 'cname' : 'Saudi Arabia'},
    {'ccode' : 'SN', 'cname' : 'Senegal'},
    {'ccode' : 'RS', 'cname' : 'Serbia'},
    {'ccode' : 'SC', 'cname' : 'Seychelles'},
    {'ccode' : 'SL', 'cname' : 'Sierra Leone'},
    {'ccode' : 'SG', 'cname' : 'Singapore'},
    {'ccode' : 'SK', 'cname' : 'Slovakia'},
    {'ccode' : 'SI', 'cname' : 'Slovenia'},
    {'ccode' : 'SB', 'cname' : 'Solomon Islands'},
    {'ccode' : 'SO', 'cname' : 'Somalia'},
    {'ccode' : 'ZA', 'cname' : 'South Africa'},
    {'ccode' : 'GS', 'cname' : 'South Georgia And Sandwich Isl.'},
    {'ccode' : 'ES', 'cname' : 'Spain'},
    {'ccode' : 'LK', 'cname' : 'Sri Lanka'},
    {'ccode' : 'SD', 'cname' : 'Sudan'},
    {'ccode' : 'SR', 'cname' : 'Suriname'},
    {'ccode' : 'SJ', 'cname' : 'Svalbard And Jan Mayen'},
    {'ccode' : 'SZ', 'cname' : 'Swaziland'},
    {'ccode' : 'SE', 'cname' : 'Sweden'},
    {'ccode' : 'CH', 'cname' : 'Switzerland'},
    {'ccode' : 'SY', 'cname' : 'Syrian Arab Republic'},
    {'ccode' : 'TW', 'cname' : 'Taiwan'},
    {'ccode' : 'TJ', 'cname' : 'Tajikistan'},
    {'ccode' : 'TZ', 'cname' : 'Tanzania'},
    {'ccode' : 'TH', 'cname' : 'Thailand'},
    {'ccode' : 'TL', 'cname' : 'Timor-Leste'},
    {'ccode' : 'TG', 'cname' : 'Togo'},
    {'ccode' : 'TK', 'cname' : 'Tokelau'},
    {'ccode' : 'TO', 'cname' : 'Tonga'},
    {'ccode' : 'TT', 'cname' : 'Trinidad And Tobago'},
    {'ccode' : 'TN', 'cname' : 'Tunisia'},
    {'ccode' : 'TR', 'cname' : 'Turkey'},
    {'ccode' : 'TM', 'cname' : 'Turkmenistan'},
    {'ccode' : 'TC', 'cname' : 'Turks And Caicos Islands'},
    {'ccode' : 'TV', 'cname' : 'Tuvalu'},
    {'ccode' : 'UG', 'cname' : 'Uganda'},
    {'ccode' : 'UA', 'cname' : 'Ukraine'},
    {'ccode' : 'AE', 'cname' : 'United Arab Emirates'},
    {'ccode' : 'GB', 'cname' : 'United Kingdom'},
    {'ccode' : 'US', 'cname' : 'United States'},
    {'ccode' : 'UM', 'cname' : 'United States Outlying Islands'},
    {'ccode' : 'UY', 'cname' : 'Uruguay'},
    {'ccode' : 'UZ', 'cname' : 'Uzbekistan'},
    {'ccode' : 'VU', 'cname' : 'Vanuatu'},
    {'ccode' : 'VE', 'cname' : 'Venezuela'},
    {'ccode' : 'VN', 'cname' : 'Viet Nam'},
    {'ccode' : 'VG', 'cname' : 'Virgin Islands, British'},
    {'ccode' : 'VI', 'cname' : 'Virgin Islands, U.S.'},
    {'ccode' : 'WF', 'cname' : 'Wallis And Futuna'},
    {'ccode' : 'EH', 'cname' : 'Western Sahara'},
    {'ccode' : 'YE', 'cname' : 'Yemen'},
    {'ccode' : 'ZM', 'cname' : 'Zambia'},
    {'ccode' : 'ZW', 'cname' : 'Zimbabwe'}
];

function CountryModel() {
    var self = this;
    self.availableCountries = ko.observableArray(isoCountries);
}

ko.applyBindings(new CountryModel());
</code></pre>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/xecgr">
        <img alt="@xecgr" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/2619966" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1598872" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="cfa98ff2cae4afebf8799ee3dd1ed633">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/xecgr" class="author text-inherit">xecgr</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1598872" class="timestamp"><relative-time datetime="2015-10-18T06:55:29Z" title="Oct 18, 2015, 12:55 AM MDT">on Oct 18, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>I've used your script since the begining of my project and now I had to translated to several languages.<br>
So, I've attached my scripts in order to improve and complete your work.<br>
Thanks!<br>
<a href="https://gist.github.com/xecgr/c753d36735c6e629c4d1">https://gist.github.com/xecgr/c753d36735c6e629c4d1</a><br>
<a href="https://gist.github.com/xecgr/a1e864b8d1ad1884cd7a">https://gist.github.com/xecgr/a1e864b8d1ad1884cd7a</a><br>
<a href="https://gist.github.com/xecgr/dbf00d3ffa4a0ec7d2e7">https://gist.github.com/xecgr/dbf00d3ffa4a0ec7d2e7</a></p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/tomffee">
        <img alt="@tomffee" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/11232591" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1617275" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="4bc78aa65ffa8849149ad287282ce198">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/tomffee" class="author text-inherit">tomffee</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1617275" class="timestamp"><relative-time datetime="2015-11-10T11:06:54Z" title="Nov 10, 2015, 4:06 AM MST">on Nov 10, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Wouldn't be better do it this way?</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-c1">isoCountries</span> <span class="pl-k">=</span> {
  <span class="pl-s"><span class="pl-pds">'</span>AF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Afghanistan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AX<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Aland Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Albania<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Algeria<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>American Samoa<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Andorra<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Angola<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Anguilla<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AQ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Antarctica<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Antigua And Barbuda<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Argentina<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Armenia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Aruba<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Australia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Austria<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Azerbaijan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bahamas<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bahrain<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bangladesh<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BB<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Barbados<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Belarus<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Belgium<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Belize<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BJ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Benin<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bermuda<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bhutan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bolivia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bosnia And Herzegovina<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Botswana<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bouvet Island<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Brazil<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>British Indian Ocean Territory<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Brunei Darussalam<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Bulgaria<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Burkina Faso<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Burundi<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cambodia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cameroon<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Canada<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cape Verde<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cayman Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Central African Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Chad<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Chile<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>China<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CX<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Christmas Island<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cocos (Keeling) Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Colombia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Comoros<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Congo<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Congo, Democratic Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cook Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Costa Rica<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cote D<span class="pl-cce">\'</span>Ivoire<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Croatia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cuba<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Cyprus<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Czech Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Denmark<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DJ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Djibouti<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Dominica<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Dominican Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>EC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Ecuador<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>EG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Egypt<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>El Salvador<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GQ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Equatorial Guinea<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ER<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Eritrea<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>EE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Estonia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ET<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Ethiopia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Falkland Islands (Malvinas)<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Faroe Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FJ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Fiji<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Finland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>France<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>French Guiana<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>French Polynesia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>French Southern Territories<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Gabon<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Gambia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Georgia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>DE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Germany<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Ghana<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Gibraltar<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Greece<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Greenland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Grenada<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GP<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guadeloupe<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guam<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guatemala<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guernsey<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guinea<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guinea-Bissau<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Guyana<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Haiti<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Heard Island &amp; Mcdonald Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Holy See (Vatican City State)<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Honduras<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Hong Kong<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>HU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Hungary<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Iceland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>India<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ID<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Indonesia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Iran, Islamic Republic Of<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IQ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Iraq<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Ireland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Isle Of Man<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Israel<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>IT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Italy<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>JM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Jamaica<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>JP<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Japan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>JE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Jersey<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>JO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Jordan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kazakhstan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kenya<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kiribati<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Korea<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kuwait<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kyrgyzstan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Lao People<span class="pl-cce">\'</span>s Democratic Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Latvia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LB<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Lebanon<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Lesotho<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Liberia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Libyan Arab Jamahiriya<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Liechtenstein<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Lithuania<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Luxembourg<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Macao<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Macedonia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Madagascar<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Malawi<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Malaysia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Maldives<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ML<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mali<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Malta<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Marshall Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MQ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Martinique<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mauritania<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mauritius<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>YT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mayotte<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MX<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mexico<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>FM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Micronesia, Federated States Of<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Moldova<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Monaco<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mongolia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ME<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Montenegro<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Montserrat<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Morocco<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Mozambique<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Myanmar<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Namibia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Nauru<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NP<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Nepal<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Netherlands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Netherlands Antilles<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>New Caledonia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>New Zealand<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Nicaragua<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Niger<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Nigeria<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Niue<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Norfolk Island<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MP<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Northern Mariana Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>NO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Norway<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>OM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Oman<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Pakistan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Palau<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Palestinian Territory, Occupied<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Panama<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Papua New Guinea<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Paraguay<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Peru<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Philippines<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Pitcairn<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Poland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Portugal<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Puerto Rico<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>QA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Qatar<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>RE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Reunion<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>RO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Romania<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>RU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Russian Federation<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>RW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Rwanda<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>BL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Barthelemy<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Helena<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>KN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Kitts And Nevis<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Lucia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>MF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Martin<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>PM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Pierre And Miquelon<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saint Vincent And Grenadines<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>WS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Samoa<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>San Marino<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ST<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Sao Tome And Principe<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Saudi Arabia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Senegal<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>RS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Serbia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Seychelles<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Sierra Leone<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Singapore<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Slovakia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Slovenia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SB<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Solomon Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Somalia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ZA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>South Africa<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GS<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>South Georgia And Sandwich Isl.<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ES<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Spain<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>LK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Sri Lanka<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SD<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Sudan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Suriname<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SJ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Svalbard And Jan Mayen<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Swaziland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Sweden<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>CH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Switzerland<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>SY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Syrian Arab Republic<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Taiwan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TJ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tajikistan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tanzania<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Thailand<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TL<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Timor-Leste<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Togo<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TK<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tokelau<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TO<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tonga<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TT<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Trinidad And Tobago<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tunisia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TR<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Turkey<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Turkmenistan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TC<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Turks And Caicos Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>TV<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Tuvalu<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>UG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Uganda<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>UA<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Ukraine<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>AE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>United Arab Emirates<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>GB<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>United Kingdom<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>US<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>United States<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>UM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>United States Outlying Islands<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>UY<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Uruguay<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>UZ<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Uzbekistan<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VU<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Vanuatu<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Venezuela<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VN<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Viet Nam<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VG<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Virgin Islands, British<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>VI<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Virgin Islands, U.S.<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>WF<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Wallis And Futuna<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>EH<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Western Sahara<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>YE<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Yemen<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ZM<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Zambia<span class="pl-pds">'</span></span>,
  },
  <span class="pl-s"><span class="pl-pds">'</span>ZW<span class="pl-pds">'</span></span> <span class="pl-k">:</span> {
    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Zimbabwe<span class="pl-pds">'</span></span>
  },
};</pre></div>
<p>So now you can simply do this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">convertCountryCode</span> <span class="pl-k">=</span> (<span class="pl-smi">code</span>) <span class="pl-k">=&gt;</span> {
    <span class="pl-k">return</span> isoCountries[code].<span class="pl-c1">name</span>;
}<span class="pl-s"><span class="pl-pds">`</span><span class="pl-pds">`</span><span class="pl-pds">`</span></span></pre></div>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/acefxlabs">
        <img alt="@acefxlabs" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/1591499" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1644634" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="ac05cf672a6aa4973e63de0fb5f21915">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/acefxlabs" class="author text-inherit">acefxlabs</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1644634" class="timestamp"><relative-time datetime="2015-12-09T00:14:24Z" title="Dec 8, 2015, 5:14 PM MST">on Dec 8, 2015</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>All Thanks</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/adelavegaf">
        <img alt="@adelavegaf" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/5798535" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1758167" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="0a96893a7f253e0b50398ebd7c588eff">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/adelavegaf" class="author text-inherit">adelavegaf</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1758167" class="timestamp"><relative-time datetime="2016-04-21T06:45:35Z" title="Apr 21, 2016, 12:45 AM MDT">on Apr 21, 2016</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Thanks</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/ericdouglas">
        <img alt="@ericdouglas" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/4119931" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1820504" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="4385cc6e56008b15876fd49c9a569106">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/ericdouglas" class="author text-inherit">ericdouglas</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1820504" class="timestamp"><relative-time datetime="2016-07-07T12:14:02Z" title="Jul 7, 2016, 6:14 AM MDT">on Jul 7, 2016</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Thanks!</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/philsam">
        <img alt="@philsam" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/8139955" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1843810" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="4a07eba67492268960439dbc9f31b6ef">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/philsam" class="author text-inherit">philsam</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1843810" class="timestamp"><relative-time datetime="2016-08-07T06:01:00Z" title="Aug 7, 2016, 12:01 AM MDT">on Aug 7, 2016</relative-time></a>


      
  <span class="d-inline-block text-gray-light">•</span>


  <div class="d-inline-block dropdown js-menu-container js-select-menu">
    <button class="btn-link no-underline text-gray dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
        edited
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"></path></svg>
    </button>

    <div class="dropdown-menu-content anim-scale-in js-menu-content">
      <div class="dropdown-menu dropdown-menu-se py-0 overflow-hidden" style="width:272px">
        <div class="dropdown-header px-3 py-2 border-bottom">Edited 1 time</div>
        <ul class="bg-gray-light" style="overflow-y:auto; max-height:250px">
          <li class="d-flex flex-justify-between border-bottom px-3 py-2 f6 css-truncate">
              <a href="https://github.com/philsam" class="text-inherit no-underline">
                <img src="./ISOCountryCodes_files/8139955(1)" width="20" height="20" class="avatar avatar-small v-align-middle" alt="@philsam">
                <span class="css-truncate-target v-align-middle text-bold text-gray-dark">philsam </span>
              </a>
            <div><relative-time datetime="2016-08-07T06:03:06Z" title="Aug 7, 2016, 12:03 AM MDT">on Aug 7, 2016</relative-time></div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>For Angular JS users: Use it as a Service</p>
<p>$scope.CountryName = "Nigeria";</p>
<p>CountryIso($scope.CountryName)</p>
<p>// Returns the ISO Country Code for the<br>
// given CountryName<br>
angular.module('YourApp').factory('CountryIso', function() {<br>
var isoCountries1 = [<br>
{'ccode' : 'AF', 'cname' : 'Afghanistan'},<br>
{'ccode' : 'AX', 'cname' : 'Aland Islands'},<br>
{'ccode' : 'AL', 'cname' : 'Albania'},<br>
{'ccode' : 'DZ', 'cname' : 'Algeria'},<br>
{'ccode' : 'AS', 'cname' : 'American Samoa'},<br>
{'ccode' : 'AD', 'cname' : 'Andorra'},<br>
{'ccode' : 'AO', 'cname' : 'Angola'},<br>
{'ccode' : 'AI', 'cname' : 'Anguilla'},<br>
{'ccode' : 'AQ', 'cname' : 'Antarctica'},<br>
{'ccode' : 'AG', 'cname' : 'Antigua And Barbuda'},<br>
{'ccode' : 'AR', 'cname' : 'Argentina'},<br>
{'ccode' : 'AM', 'cname' : 'Armenia'},<br>
{'ccode' : 'AW', 'cname' : 'Aruba'},<br>
{'ccode' : 'AU', 'cname' : 'Australia'},<br>
{'ccode' : 'AT', 'cname' : 'Austria'},<br>
{'ccode' : 'AZ', 'cname' : 'Azerbaijan'},<br>
{'ccode' : 'BS', 'cname' : 'Bahamas'},<br>
{'ccode' : 'BH', 'cname' : 'Bahrain'},<br>
{'ccode' : 'BD', 'cname' : 'Bangladesh'},<br>
{'ccode' : 'BB', 'cname' : 'Barbados'},<br>
{'ccode' : 'BY', 'cname' : 'Belarus'},<br>
{'ccode' : 'BE', 'cname' : 'Belgium'},<br>
{'ccode' : 'BZ', 'cname' : 'Belize'},<br>
{'ccode' : 'BJ', 'cname' : 'Benin'},<br>
{'ccode' : 'BM', 'cname' : 'Bermuda'},<br>
{'ccode' : 'BT', 'cname' : 'Bhutan'},<br>
{'ccode' : 'BO', 'cname' : 'Bolivia'},<br>
{'ccode' : 'BA', 'cname' : 'Bosnia And Herzegovina'},<br>
{'ccode' : 'BW', 'cname' : 'Botswana'},<br>
{'ccode' : 'BV', 'cname' : 'Bouvet Island'},<br>
{'ccode' : 'BR', 'cname' : 'Brazil'},<br>
{'ccode' : 'IO', 'cname' : 'British Indian Ocean Territory'},<br>
{'ccode' : 'BN', 'cname' : 'Brunei Darussalam'},<br>
{'ccode' : 'BG', 'cname' : 'Bulgaria'},<br>
{'ccode' : 'BF', 'cname' : 'Burkina Faso'},<br>
{'ccode' : 'BI', 'cname' : 'Burundi'},<br>
{'ccode' : 'KH', 'cname' : 'Cambodia'},<br>
{'ccode' : 'CM', 'cname' : 'Cameroon'},<br>
{'ccode' : 'CA', 'cname' : 'Canada'},<br>
{'ccode' : 'CV', 'cname' : 'Cape Verde'},<br>
{'ccode' : 'KY', 'cname' : 'Cayman Islands'},<br>
{'ccode' : 'CF', 'cname' : 'Central African Republic'},<br>
{'ccode' : 'TD', 'cname' : 'Chad'},<br>
{'ccode' : 'CL', 'cname' : 'Chile'},<br>
{'ccode' : 'CN', 'cname' : 'China'},<br>
{'ccode' : 'CX', 'cname' : 'Christmas Island'},<br>
{'ccode' : 'CC', 'cname' : 'Cocos (Keeling) Islands'},<br>
{'ccode' : 'CO', 'cname' : 'Colombia'},<br>
{'ccode' : 'KM', 'cname' : 'Comoros'},<br>
{'ccode' : 'CG', 'cname' : 'Congo'},<br>
{'ccode' : 'CD', 'cname' : 'Congo, Democratic Republic'},<br>
{'ccode' : 'CK', 'cname' : 'Cook Islands'},<br>
{'ccode' : 'CR', 'cname' : 'Costa Rica'},<br>
{'ccode' : 'CI', 'cname' : 'Cote D'Ivoire'},<br>
{'ccode' : 'HR', 'cname' : 'Croatia'},<br>
{'ccode' : 'CU', 'cname' : 'Cuba'},<br>
{'ccode' : 'CY', 'cname' : 'Cyprus'},<br>
{'ccode' : 'CZ', 'cname' : 'Czech Republic'},<br>
{'ccode' : 'DK', 'cname' : 'Denmark'},<br>
{'ccode' : 'DJ', 'cname' : 'Djibouti'},<br>
{'ccode' : 'DM', 'cname' : 'Dominica'},<br>
{'ccode' : 'DO', 'cname' : 'Dominican Republic'},<br>
{'ccode' : 'EC', 'cname' : 'Ecuador'},<br>
{'ccode' : 'EG', 'cname' : 'Egypt'},<br>
{'ccode' : 'SV', 'cname' : 'El Salvador'},<br>
{'ccode' : 'GQ', 'cname' : 'Equatorial Guinea'},<br>
{'ccode' : 'ER', 'cname' : 'Eritrea'},<br>
{'ccode' : 'EE', 'cname' : 'Estonia'},<br>
{'ccode' : 'ET', 'cname' : 'Ethiopia'},<br>
{'ccode' : 'FK', 'cname' : 'Falkland Islands (Malvinas)'},<br>
{'ccode' : 'FO', 'cname' : 'Faroe Islands'},<br>
{'ccode' : 'FJ', 'cname' : 'Fiji'},<br>
{'ccode' : 'FI', 'cname' : 'Finland'},<br>
{'ccode' : 'FR', 'cname' : 'France'},<br>
{'ccode' : 'GF', 'cname' : 'French Guiana'},<br>
{'ccode' : 'PF', 'cname' : 'French Polynesia'},<br>
{'ccode' : 'TF', 'cname' : 'French Southern Territories'},<br>
{'ccode' : 'GA', 'cname' : 'Gabon'},<br>
{'ccode' : 'GM', 'cname' : 'Gambia'},<br>
{'ccode' : 'GE', 'cname' : 'Georgia'},<br>
{'ccode' : 'DE', 'cname' : 'Germany'},<br>
{'ccode' : 'GH', 'cname' : 'Ghana'},<br>
{'ccode' : 'GI', 'cname' : 'Gibraltar'},<br>
{'ccode' : 'GR', 'cname' : 'Greece'},<br>
{'ccode' : 'GL', 'cname' : 'Greenland'},<br>
{'ccode' : 'GD', 'cname' : 'Grenada'},<br>
{'ccode' : 'GP', 'cname' : 'Guadeloupe'},<br>
{'ccode' : 'GU', 'cname' : 'Guam'},<br>
{'ccode' : 'GT', 'cname' : 'Guatemala'},<br>
{'ccode' : 'GG', 'cname' : 'Guernsey'},<br>
{'ccode' : 'GN', 'cname' : 'Guinea'},<br>
{'ccode' : 'GW', 'cname' : 'Guinea-Bissau'},<br>
{'ccode' : 'GY', 'cname' : 'Guyana'},<br>
{'ccode' : 'HT', 'cname' : 'Haiti'},<br>
{'ccode' : 'HM', 'cname' : 'Heard Island &amp; Mcdonald Islands'},<br>
{'ccode' : 'VA', 'cname' : 'Holy See (Vatican City State)'},<br>
{'ccode' : 'HN', 'cname' : 'Honduras'},<br>
{'ccode' : 'HK', 'cname' : 'Hong Kong'},<br>
{'ccode' : 'HU', 'cname' : 'Hungary'},<br>
{'ccode' : 'IS', 'cname' : 'Iceland'},<br>
{'ccode' : 'IN', 'cname' : 'India'},<br>
{'ccode' : 'ID', 'cname' : 'Indonesia'},<br>
{'ccode' : 'IR', 'cname' : 'Iran, Islamic Republic Of'},<br>
{'ccode' : 'IQ', 'cname' : 'Iraq'},<br>
{'ccode' : 'IE', 'cname' : 'Ireland'},<br>
{'ccode' : 'IM', 'cname' : 'Isle Of Man'},<br>
{'ccode' : 'IL', 'cname' : 'Israel'},<br>
{'ccode' : 'IT', 'cname' : 'Italy'},<br>
{'ccode' : 'JM', 'cname' : 'Jamaica'},<br>
{'ccode' : 'JP', 'cname' : 'Japan'},<br>
{'ccode' : 'JE', 'cname' : 'Jersey'},<br>
{'ccode' : 'JO', 'cname' : 'Jordan'},<br>
{'ccode' : 'KZ', 'cname' : 'Kazakhstan'},<br>
{'ccode' : 'KE', 'cname' : 'Kenya'},<br>
{'ccode' : 'KI', 'cname' : 'Kiribati'},<br>
{'ccode' : 'KR', 'cname' : 'Korea'},<br>
{'ccode' : 'KW', 'cname' : 'Kuwait'},<br>
{'ccode' : 'KG', 'cname' : 'Kyrgyzstan'},<br>
{'ccode' : 'LA', 'cname' : 'Lao People's Democratic Republic'},<br>
{'ccode' : 'LV', 'cname' : 'Latvia'},<br>
{'ccode' : 'LB', 'cname' : 'Lebanon'},<br>
{'ccode' : 'LS', 'cname' : 'Lesotho'},<br>
{'ccode' : 'LR', 'cname' : 'Liberia'},<br>
{'ccode' : 'LY', 'cname' : 'Libyan Arab Jamahiriya'},<br>
{'ccode' : 'LI', 'cname' : 'Liechtenstein'},<br>
{'ccode' : 'LT', 'cname' : 'Lithuania'},<br>
{'ccode' : 'LU', 'cname' : 'Luxembourg'},<br>
{'ccode' : 'MO', 'cname' : 'Macao'},<br>
{'ccode' : 'MK', 'cname' : 'Macedonia'},<br>
{'ccode' : 'MG', 'cname' : 'Madagascar'},<br>
{'ccode' : 'MW', 'cname' : 'Malawi'},<br>
{'ccode' : 'MY', 'cname' : 'Malaysia'},<br>
{'ccode' : 'MV', 'cname' : 'Maldives'},<br>
{'ccode' : 'ML', 'cname' : 'Mali'},<br>
{'ccode' : 'MT', 'cname' : 'Malta'},<br>
{'ccode' : 'MH', 'cname' : 'Marshall Islands'},<br>
{'ccode' : 'MQ', 'cname' : 'Martinique'},<br>
{'ccode' : 'MR', 'cname' : 'Mauritania'},<br>
{'ccode' : 'MU', 'cname' : 'Mauritius'},<br>
{'ccode' : 'YT', 'cname' : 'Mayotte'},<br>
{'ccode' : 'MX', 'cname' : 'Mexico'},<br>
{'ccode' : 'FM', 'cname' : 'Micronesia, Federated States Of'},<br>
{'ccode' : 'MD', 'cname' : 'Moldova'},<br>
{'ccode' : 'MC', 'cname' : 'Monaco'},<br>
{'ccode' : 'MN', 'cname' : 'Mongolia'},<br>
{'ccode' : 'ME', 'cname' : 'Montenegro'},<br>
{'ccode' : 'MS', 'cname' : 'Montserrat'},<br>
{'ccode' : 'MA', 'cname' : 'Morocco'},<br>
{'ccode' : 'MZ', 'cname' : 'Mozambique'},<br>
{'ccode' : 'MM', 'cname' : 'Myanmar'},<br>
{'ccode' : 'NA', 'cname' : 'Namibia'},<br>
{'ccode' : 'NR', 'cname' : 'Nauru'},<br>
{'ccode' : 'NP', 'cname' : 'Nepal'},<br>
{'ccode' : 'NL', 'cname' : 'Netherlands'},<br>
{'ccode' : 'AN', 'cname' : 'Netherlands Antilles'},<br>
{'ccode' : 'NC', 'cname' : 'New Caledonia'},<br>
{'ccode' : 'NZ', 'cname' : 'New Zealand'},<br>
{'ccode' : 'NI', 'cname' : 'Nicaragua'},<br>
{'ccode' : 'NE', 'cname' : 'Niger'},<br>
{'ccode' : 'NG', 'cname' : 'Nigeria'},<br>
{'ccode' : 'NU', 'cname' : 'Niue'},<br>
{'ccode' : 'NF', 'cname' : 'Norfolk Island'},<br>
{'ccode' : 'MP', 'cname' : 'Northern Mariana Islands'},<br>
{'ccode' : 'NO', 'cname' : 'Norway'},<br>
{'ccode' : 'OM', 'cname' : 'Oman'},<br>
{'ccode' : 'PK', 'cname' : 'Pakistan'},<br>
{'ccode' : 'PW', 'cname' : 'Palau'},<br>
{'ccode' : 'PS', 'cname' : 'Palestinian Territory, Occupied'},<br>
{'ccode' : 'PA', 'cname' : 'Panama'},<br>
{'ccode' : 'PG', 'cname' : 'Papua New Guinea'},<br>
{'ccode' : 'PY', 'cname' : 'Paraguay'},<br>
{'ccode' : 'PE', 'cname' : 'Peru'},<br>
{'ccode' : 'PH', 'cname' : 'Philippines'},<br>
{'ccode' : 'PN', 'cname' : 'Pitcairn'},<br>
{'ccode' : 'PL', 'cname' : 'Poland'},<br>
{'ccode' : 'PT', 'cname' : 'Portugal'},<br>
{'ccode' : 'PR', 'cname' : 'Puerto Rico'},<br>
{'ccode' : 'QA', 'cname' : 'Qatar'},<br>
{'ccode' : 'RE', 'cname' : 'Reunion'},<br>
{'ccode' : 'RO', 'cname' : 'Romania'},<br>
{'ccode' : 'RU', 'cname' : 'Russian Federation'},<br>
{'ccode' : 'RW', 'cname' : 'Rwanda'},<br>
{'ccode' : 'BL', 'cname' : 'Saint Barthelemy'},<br>
{'ccode' : 'SH', 'cname' : 'Saint Helena'},<br>
{'ccode' : 'KN', 'cname' : 'Saint Kitts And Nevis'},<br>
{'ccode' : 'LC', 'cname' : 'Saint Lucia'},<br>
{'ccode' : 'MF', 'cname' : 'Saint Martin'},<br>
{'ccode' : 'PM', 'cname' : 'Saint Pierre And Miquelon'},<br>
{'ccode' : 'VC', 'cname' : 'Saint Vincent And Grenadines'},<br>
{'ccode' : 'WS', 'cname' : 'Samoa'},<br>
{'ccode' : 'SM', 'cname' : 'San Marino'},<br>
{'ccode' : 'ST', 'cname' : 'Sao Tome And Principe'},<br>
{'ccode' : 'SA', 'cname' : 'Saudi Arabia'},<br>
{'ccode' : 'SN', 'cname' : 'Senegal'},<br>
{'ccode' : 'RS', 'cname' : 'Serbia'},<br>
{'ccode' : 'SC', 'cname' : 'Seychelles'},<br>
{'ccode' : 'SL', 'cname' : 'Sierra Leone'},<br>
{'ccode' : 'SG', 'cname' : 'Singapore'},<br>
{'ccode' : 'SK', 'cname' : 'Slovakia'},<br>
{'ccode' : 'SI', 'cname' : 'Slovenia'},<br>
{'ccode' : 'SB', 'cname' : 'Solomon Islands'},<br>
{'ccode' : 'SO', 'cname' : 'Somalia'},<br>
{'ccode' : 'ZA', 'cname' : 'South Africa'},<br>
{'ccode' : 'GS', 'cname' : 'South Georgia And Sandwich Isl.'},<br>
{'ccode' : 'ES', 'cname' : 'Spain'},<br>
{'ccode' : 'LK', 'cname' : 'Sri Lanka'},<br>
{'ccode' : 'SD', 'cname' : 'Sudan'},<br>
{'ccode' : 'SR', 'cname' : 'Suriname'},<br>
{'ccode' : 'SJ', 'cname' : 'Svalbard And Jan Mayen'},<br>
{'ccode' : 'SZ', 'cname' : 'Swaziland'},<br>
{'ccode' : 'SE', 'cname' : 'Sweden'},<br>
{'ccode' : 'CH', 'cname' : 'Switzerland'},<br>
{'ccode' : 'SY', 'cname' : 'Syrian Arab Republic'},<br>
{'ccode' : 'TW', 'cname' : 'Taiwan'},<br>
{'ccode' : 'TJ', 'cname' : 'Tajikistan'},<br>
{'ccode' : 'TZ', 'cname' : 'Tanzania'},<br>
{'ccode' : 'TH', 'cname' : 'Thailand'},<br>
{'ccode' : 'TL', 'cname' : 'Timor-Leste'},<br>
{'ccode' : 'TG', 'cname' : 'Togo'},<br>
{'ccode' : 'TK', 'cname' : 'Tokelau'},<br>
{'ccode' : 'TO', 'cname' : 'Tonga'},<br>
{'ccode' : 'TT', 'cname' : 'Trinidad And Tobago'},<br>
{'ccode' : 'TN', 'cname' : 'Tunisia'},<br>
{'ccode' : 'TR', 'cname' : 'Turkey'},<br>
{'ccode' : 'TM', 'cname' : 'Turkmenistan'},<br>
{'ccode' : 'TC', 'cname' : 'Turks And Caicos Islands'},<br>
{'ccode' : 'TV', 'cname' : 'Tuvalu'},<br>
{'ccode' : 'UG', 'cname' : 'Uganda'},<br>
{'ccode' : 'UA', 'cname' : 'Ukraine'},<br>
{'ccode' : 'AE', 'cname' : 'United Arab Emirates'},<br>
{'ccode' : 'GB', 'cname' : 'United Kingdom'},<br>
{'ccode' : 'US', 'cname' : 'United States'},<br>
{'ccode' : 'UM', 'cname' : 'United States Outlying Islands'},<br>
{'ccode' : 'UY', 'cname' : 'Uruguay'},<br>
{'ccode' : 'UZ', 'cname' : 'Uzbekistan'},<br>
{'ccode' : 'VU', 'cname' : 'Vanuatu'},<br>
{'ccode' : 'VE', 'cname' : 'Venezuela'},<br>
{'ccode' : 'VN', 'cname' : 'Viet Nam'},<br>
{'ccode' : 'VG', 'cname' : 'Virgin Islands, British'},<br>
{'ccode' : 'VI', 'cname' : 'Virgin Islands, U.S.'},<br>
{'ccode' : 'WF', 'cname' : 'Wallis And Futuna'},<br>
{'ccode' : 'EH', 'cname' : 'Western Sahara'},<br>
{'ccode' : 'YE', 'cname' : 'Yemen'},<br>
{'ccode' : 'ZM', 'cname' : 'Zambia'},<br>
{'ccode' : 'ZW', 'cname' : 'Zimbabwe'}<br>
];</p>
<pre><code>//Returns the ISO Country Code for the 
 // given CountryName
return function (countryName) {
  for(var prop in isoCountries1){
      if(isoCountries1.hasOwnProperty(prop)){
          if(isoCountries1[prop]['cname'] === countryName) {
              return isoCountries1[prop]['ccode'];
              break;
          }
      }
  }
}
</code></pre>
<p>});</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/tmrk">
        <img alt="@tmrk" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/16718845" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1853327" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="c7fd8d64590d5aab8fa8f76eee1f2482">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/tmrk" class="author text-inherit">tmrk</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1853327" class="timestamp"><relative-time datetime="2016-08-19T10:33:28Z" title="Aug 19, 2016, 4:33 AM MDT">on Aug 19, 2016</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Thanks for this idea!</p>
<p>I needed some more details (such as regions and continents), so I created another one, see here: <a href="https://gist.github.com/tmrk/4aa3cf285360526a98b2115d63e0cafd">https://gist.github.com/tmrk/4aa3cf285360526a98b2115d63e0cafd</a></p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/1mike12">
        <img alt="@1mike12" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/4983282" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1959884" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="6d1263cc335615660f85aa1703df2b9b">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/1mike12" class="author text-inherit">1mike12</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1959884" class="timestamp"><relative-time datetime="2016-12-30T18:15:25Z" title="Dec 30, 2016, 11:15 AM MST">on Dec 30, 2016</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>in reverse, IE using some geocoders without short 2 letter codes:</p>
<pre><code>    var isoCountries = {
        'Afghanistan': 'AF',
        'Aland Islands': 'AX',
        'Albania': 'AL',
        'Algeria': 'DZ',
        'American Samoa': 'AS',
        'Andorra': 'AD',
        'Angola': 'AO',
        'Anguilla': 'AI',
        'Antarctica': 'AQ',
        'Antigua And Barbuda': 'AG',
        'Argentina': 'AR',
        'Armenia': 'AM',
        'Aruba': 'AW',
        'Australia': 'AU',
        'Austria': 'AT',
        'Azerbaijan': 'AZ',
        'Bahamas': 'BS',
        'Bahrain': 'BH',
        'Bangladesh': 'BD',
        'Barbados': 'BB',
        'Belarus': 'BY',
        'Belgium': 'BE',
        'Belize': 'BZ',
        'Benin': 'BJ',
        'Bermuda': 'BM',
        'Bhutan': 'BT',
        'Bolivia': 'BO',
        'Bosnia And Herzegovina': 'BA',
        'Botswana': 'BW',
        'Bouvet Island': 'BV',
        'Brazil': 'BR',
        'British Indian Ocean Territory': 'IO',
        'Brunei Darussalam': 'BN',
        'Bulgaria': 'BG',
        'Burkina Faso': 'BF',
        'Burundi': 'BI',
        'Cambodia': 'KH',
        'Cameroon': 'CM',
        'Canada': 'CA',
        'Cape Verde': 'CV',
        'Cayman Islands': 'KY',
        'Central African Republic': 'CF',
        'Chad': 'TD',
        'Chile': 'CL',
        'China': 'CN',
        'Christmas Island': 'CX',
        'Cocos (Keeling) Islands': 'CC',
        'Colombia': 'CO',
        'Comoros': 'KM',
        'Congo': 'CG',
        'Congo, Democratic Republic': 'CD',
        'Cook Islands': 'CK',
        'Costa Rica': 'CR',
        'Cote D\'Ivoire': 'CI',
        'Croatia': 'HR',
        'Cuba': 'CU',
        'Cyprus': 'CY',
        'Czech Republic': 'CZ',
        'Denmark': 'DK',
        'Djibouti': 'DJ',
        'Dominica': 'DM',
        'Dominican Republic': 'DO',
        'Ecuador': 'EC',
        'Egypt': 'EG',
        'El Salvador': 'SV',
        'Equatorial Guinea': 'GQ',
        'Eritrea': 'ER',
        'Estonia': 'EE',
        'Ethiopia': 'ET',
        'Falkland Islands': 'FK',
        'Faroe Islands': 'FO',
        'Fiji': 'FJ',
        'Finland': 'FI',
        'France': 'FR',
        'French Guiana': 'GF',
        'French Polynesia': 'PF',
        'French Southern Territories': 'TF',
        'Gabon': 'GA',
        'Gambia': 'GM',
        'Georgia': 'GE',
        'Germany': 'DE',
        'Ghana': 'GH',
        'Gibraltar': 'GI',
        'Greece': 'GR',
        'Greenland': 'GL',
        'Grenada': 'GD',
        'Guadeloupe': 'GP',
        'Guam': 'GU',
        'Guatemala': 'GT',
        'Guernsey': 'GG',
        'Guinea': 'GN',
        'Guinea-Bissau': 'GW',
        'Guyana': 'GY',
        'Haiti': 'HT',
        'Heard Island &amp; Mcdonald Islands': 'HM',
        'Holy See (Vatican City State)': 'VA',
        'Honduras': 'HN',
        'Hong Kong': 'HK',
        'Hungary': 'HU',
        'Iceland': 'IS',
        'India': 'IN',
        'Indonesia': 'ID',
        'Iran, Islamic Republic Of': 'IR',
        'Iraq': 'IQ',
        'Ireland': 'IE',
        'Isle Of Man': 'IM',
        'Israel': 'IL',
        'Italy': 'IT',
        'Jamaica': 'JM',
        'Japan': 'JP',
        'Jersey': 'JE',
        'Jordan': 'JO',
        'Kazakhstan': 'KZ',
        'Kenya': 'KE',
        'Kiribati': 'KI',
        'Korea': 'KR',
        'Kuwait': 'KW',
        'Kyrgyzstan': 'KG',
        'Lao People\'s Democratic Republic': 'LA',
        'Latvia': 'LV',
        'Lebanon': 'LB',
        'Lesotho': 'LS',
        'Liberia': 'LR',
        'Libyan Arab Jamahiriya': 'LY',
        'Liechtenstein': 'LI',
        'Lithuania': 'LT',
        'Luxembourg': 'LU',
        'Macao': 'MO',
        'Macedonia': 'MK',
        'Madagascar': 'MG',
        'Malawi': 'MW',
        'Malaysia': 'MY',
        'Maldives': 'MV',
        'Mali': 'ML',
        'Malta': 'MT',
        'Marshall Islands': 'MH',
        'Martinique': 'MQ',
        'Mauritania': 'MR',
        'Mauritius': 'MU',
        'Mayotte': 'YT',
        'Mexico': 'MX',
        'Micronesia, Federated States Of': 'FM',
        'Moldova': 'MD',
        'Monaco': 'MC',
        'Mongolia': 'MN',
        'Montenegro': 'ME',
        'Montserrat': 'MS',
        'Morocco': 'MA',
        'Mozambique': 'MZ',
        'Myanmar': 'MM',
        'Namibia': 'NA',
        'Nauru': 'NR',
        'Nepal': 'NP',
        'Netherlands': 'NL',
        'Netherlands Antilles': 'AN',
        'New Caledonia': 'NC',
        'New Zealand': 'NZ',
        'Nicaragua': 'NI',
        'Niger': 'NE',
        'Nigeria': 'NG',
        'Niue': 'NU',
        'Norfolk Island': 'NF',
        'Northern Mariana Islands': 'MP',
        'Norway': 'NO',
        'Oman': 'OM',
        'Pakistan': 'PK',
        'Palau': 'PW',
        'Palestinian Territory, Occupied': 'PS',
        'Panama': 'PA',
        'Papua New Guinea': 'PG',
        'Paraguay': 'PY',
        'Peru': 'PE',
        'Philippines': 'PH',
        'Pitcairn': 'PN',
        'Poland': 'PL',
        'Portugal': 'PT',
        'Puerto Rico': 'PR',
        'Qatar': 'QA',
        'Reunion': 'RE',
        'Romania': 'RO',
        'Russian Federation': 'RU',
        'Rwanda': 'RW',
        'Saint Barthelemy': 'BL',
        'Saint Helena': 'SH',
        'Saint Kitts And Nevis': 'KN',
        'Saint Lucia': 'LC',
        'Saint Martin': 'MF',
        'Saint Pierre And Miquelon': 'PM',
        'Saint Vincent And Grenadines': 'VC',
        'Samoa': 'WS',
        'San Marino': 'SM',
        'Sao Tome And Principe': 'ST',
        'Saudi Arabia': 'SA',
        'Senegal': 'SN',
        'Serbia': 'RS',
        'Seychelles': 'SC',
        'Sierra Leone': 'SL',
        'Singapore': 'SG',
        'Slovakia': 'SK',
        'Slovenia': 'SI',
        'Solomon Islands': 'SB',
        'Somalia': 'SO',
        'South Africa': 'ZA',
        'South Georgia And Sandwich Isl.': 'GS',
        'Spain': 'ES',
        'Sri Lanka': 'LK',
        'Sudan': 'SD',
        'Suriname': 'SR',
        'Svalbard And Jan Mayen': 'SJ',
        'Swaziland': 'SZ',
        'Sweden': 'SE',
        'Switzerland': 'CH',
        'Syrian Arab Republic': 'SY',
        'Taiwan': 'TW',
        'Tajikistan': 'TJ',
        'Tanzania': 'TZ',
        'Thailand': 'TH',
        'Timor-Leste': 'TL',
        'Togo': 'TG',
        'Tokelau': 'TK',
        'Tonga': 'TO',
        'Trinidad And Tobago': 'TT',
        'Tunisia': 'TN',
        'Turkey': 'TR',
        'Turkmenistan': 'TM',
        'Turks And Caicos Islands': 'TC',
        'Tuvalu': 'TV',
        'Uganda': 'UG',
        'Ukraine': 'UA',
        'United Arab Emirates': 'AE',
        'United Kingdom': 'GB',
        'United States': 'US',
        'United States Outlying Islands': 'UM',
        'Uruguay': 'UY',
        'Uzbekistan': 'UZ',
        'Vanuatu': 'VU',
        'Venezuela': 'VE',
        'Vietnam': 'VN',
        'Virgin Islands, British': 'VG',
        'Virgin Islands, U.S.': 'VI',
        'Wallis And Futuna': 'WF',
        'Western Sahara': 'EH',
        'Yemen': 'YE',
        'Zambia': 'ZM',
        'Zimbabwe': 'ZW'
    };
</code></pre>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/bilbof">
        <img alt="@bilbof" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/8124374" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1963107" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="612d916007144baa676c6ded9af2b611">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/bilbof" class="author text-inherit">bilbof</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1963107" class="timestamp"><relative-time datetime="2017-01-04T23:02:08Z" title="Jan 4, 2017, 4:02 PM MST">on Jan 4, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>ISO 2 to ISO 3</p>
<pre><code>  {
    "AF": "AFG",
    "AX": "ALA",
    "AL": "ALB",
    "DZ": "DZA",
    "AS": "ASM",
    "AD": "AND",
    "AO": "AGO",
    "AI": "AIA",
    "AQ": "ATA",
    "AG": "ATG",
    "AR": "ARG",
    "AM": "ARM",
    "AW": "ABW",
    "AU": "AUS",
    "AT": "AUT",
    "AZ": "AZE",
    "BS": "BHS",
    "BH": "BHR",
    "BD": "BGD",
    "BB": "BRB",
    "BY": "BLR",
    "BE": "BEL",
    "BZ": "BLZ",
    "BJ": "BEN",
    "BM": "BMU",
    "BT": "BTN",
    "BO": "BOL",
    "BQ": "BES",
    "BA": "BIH",
    "BW": "BWA",
    "BV": "BVT",
    "BR": "BRA",
    "IO": "IOT",
    "BN": "BRN",
    "BG": "BGR",
    "BF": "BFA",
    "BI": "BDI",
    "CV": "CPV",
    "KH": "KHM",
    "CM": "CMR",
    "CA": "CAN",
    "KY": "CYM",
    "CF": "CAF",
    "TD": "TCD",
    "CL": "CHL",
    "CN": "CHN",
    "CX": "CXR",
    "CC": "CCK",
    "CO": "COL",
    "KM": "COM",
    "CG": "COG",
    "CD": "COD",
    "CK": "COK",
    "CR": "CRI",
    "CI": "CIV",
    "HR": "HRV",
    "CU": "CUB",
    "CW": "CUW",
    "CY": "CYP",
    "CZ": "CZE",
    "DK": "DNK",
    "DJ": "DJI",
    "DM": "DMA",
    "DO": "DOM",
    "EC": "ECU",
    "EG": "EGY",
    "SV": "SLV",
    "GQ": "GNQ",
    "ER": "ERI",
    "EE": "EST",
    "ET": "ETH",
    "FK": "FLK",
    "FO": "FRO",
    "FJ": "FJI",
    "FI": "FIN",
    "FR": "FRA",
    "GF": "GUF",
    "PF": "PYF",
    "TF": "ATF",
    "GA": "GAB",
    "GM": "GMB",
    "GE": "GEO",
    "DE": "DEU",
    "GH": "GHA",
    "GI": "GIB",
    "GR": "GRC",
    "GL": "GRL",
    "GD": "GRD",
    "GP": "GLP",
    "GU": "GUM",
    "GT": "GTM",
    "GG": "GGY",
    "GN": "GIN",
    "GW": "GNB",
    "GY": "GUY",
    "HT": "HTI",
    "HM": "HMD",
    "VA": "VAT",
    "HN": "HND",
    "HK": "HKG",
    "HU": "HUN",
    "IS": "ISL",
    "IN": "IND",
    "ID": "IDN",
    "IR": "IRN",
    "IQ": "IRQ",
    "IE": "IRL",
    "IM": "IMN",
    "IL": "ISR",
    "IT": "ITA",
    "JM": "JAM",
    "JP": "JPN",
    "JE": "JEY",
    "JO": "JOR",
    "KZ": "KAZ",
    "KE": "KEN",
    "KI": "KIR",
    "KP": "PRK",
    "KR": "KOR",
    "KW": "KWT",
    "KG": "KGZ",
    "LA": "LAO",
    "LV": "LVA",
    "LB": "LBN",
    "LS": "LSO",
    "LR": "LBR",
    "LY": "LBY",
    "LI": "LIE",
    "LT": "LTU",
    "LU": "LUX",
    "MO": "MAC",
    "MK": "MKD",
    "MG": "MDG",
    "MW": "MWI",
    "MY": "MYS",
    "MV": "MDV",
    "ML": "MLI",
    "MT": "MLT",
    "MH": "MHL",
    "MQ": "MTQ",
    "MR": "MRT",
    "MU": "MUS",
    "YT": "MYT",
    "MX": "MEX",
    "FM": "FSM",
    "MD": "MDA",
    "MC": "MCO",
    "MN": "MNG",
    "ME": "MNE",
    "MS": "MSR",
    "MA": "MAR",
    "MZ": "MOZ",
    "MM": "MMR",
    "NA": "NAM",
    "NR": "NRU",
    "NP": "NPL",
    "NL": "NLD",
    "NC": "NCL",
    "NZ": "NZL",
    "NI": "NIC",
    "NE": "NER",
    "NG": "NGA",
    "NU": "NIU",
    "NF": "NFK",
    "MP": "MNP",
    "NO": "NOR",
    "OM": "OMN",
    "PK": "PAK",
    "PW": "PLW",
    "PS": "PSE",
    "PA": "PAN",
    "PG": "PNG",
    "PY": "PRY",
    "PE": "PER",
    "PH": "PHL",
    "PN": "PCN",
    "PL": "POL",
    "PT": "PRT",
    "PR": "PRI",
    "QA": "QAT",
    "RE": "REU",
    "RO": "ROU",
    "RU": "RUS",
    "RW": "RWA",
    "BL": "BLM",
    "SH": "SHN",
    "KN": "KNA",
    "LC": "LCA",
    "MF": "MAF",
    "PM": "SPM",
    "VC": "VCT",
    "WS": "WSM",
    "SM": "SMR",
    "ST": "STP",
    "SA": "SAU",
    "SN": "SEN",
    "RS": "SRB",
    "SC": "SYC",
    "SL": "SLE",
    "SG": "SGP",
    "SX": "SXM",
    "SK": "SVK",
    "SI": "SVN",
    "SB": "SLB",
    "SO": "SOM",
    "ZA": "ZAF",
    "GS": "SGS",
    "SS": "SSD",
    "ES": "ESP",
    "LK": "LKA",
    "SD": "SDN",
    "SR": "SUR",
    "SJ": "SJM",
    "SZ": "SWZ",
    "SE": "SWE",
    "CH": "CHE",
    "SY": "SYR",
    "TW": "TWN",
    "TJ": "TJK",
    "TZ": "TZA",
    "TH": "THA",
    "TL": "TLS",
    "TG": "TGO",
    "TK": "TKL",
    "TO": "TON",
    "TT": "TTO",
    "TN": "TUN",
    "TR": "TUR",
    "TM": "TKM",
    "TC": "TCA",
    "TV": "TUV",
    "UG": "UGA",
    "UA": "UKR",
    "AE": "ARE",
    "GB": "GBR",
    "US": "USA",
    "UM": "UMI",
    "UY": "URY",
    "UZ": "UZB",
    "VU": "VUT",
    "VE": "VEN",
    "VN": "VNM",
    "VG": "VGB",
    "VI": "VIR",
    "WF": "WLF",
    "EH": "ESH",
    "YE": "YEM",
    "ZM": "ZMB",
    "ZW": "ZWE"
  }
</code></pre>
<p>ISO 3 to ISO 2</p>
<pre><code>  {
    "iso3": "iso2",
    "AFG": "AF",
    "ALA": "AX",
    "ALB": "AL",
    "DZA": "DZ",
    "ASM": "AS",
    "AND": "AD",
    "AGO": "AO",
    "AIA": "AI",
    "ATA": "AQ",
    "ATG": "AG",
    "ARG": "AR",
    "ARM": "AM",
    "ABW": "AW",
    "AUS": "AU",
    "AUT": "AT",
    "AZE": "AZ",
    "BHS": "BS",
    "BHR": "BH",
    "BGD": "BD",
    "BRB": "BB",
    "BLR": "BY",
    "BEL": "BE",
    "BLZ": "BZ",
    "BEN": "BJ",
    "BMU": "BM",
    "BTN": "BT",
    "BOL": "BO",
    "BES": "BQ",
    "BIH": "BA",
    "BWA": "BW",
    "BVT": "BV",
    "BRA": "BR",
    "IOT": "IO",
    "BRN": "BN",
    "BGR": "BG",
    "BFA": "BF",
    "BDI": "BI",
    "CPV": "CV",
    "KHM": "KH",
    "CMR": "CM",
    "CAN": "CA",
    "CYM": "KY",
    "CAF": "CF",
    "TCD": "TD",
    "CHL": "CL",
    "CHN": "CN",
    "CXR": "CX",
    "CCK": "CC",
    "COL": "CO",
    "COM": "KM",
    "COG": "CG",
    "COD": "CD",
    "COK": "CK",
    "CRI": "CR",
    "CIV": "CI",
    "HRV": "HR",
    "CUB": "CU",
    "CUW": "CW",
    "CYP": "CY",
    "CZE": "CZ",
    "DNK": "DK",
    "DJI": "DJ",
    "DMA": "DM",
    "DOM": "DO",
    "ECU": "EC",
    "EGY": "EG",
    "SLV": "SV",
    "GNQ": "GQ",
    "ERI": "ER",
    "EST": "EE",
    "ETH": "ET",
    "FLK": "FK",
    "FRO": "FO",
    "FJI": "FJ",
    "FIN": "FI",
    "FRA": "FR",
    "GUF": "GF",
    "PYF": "PF",
    "ATF": "TF",
    "GAB": "GA",
    "GMB": "GM",
    "GEO": "GE",
    "DEU": "DE",
    "GHA": "GH",
    "GIB": "GI",
    "GRC": "GR",
    "GRL": "GL",
    "GRD": "GD",
    "GLP": "GP",
    "GUM": "GU",
    "GTM": "GT",
    "GGY": "GG",
    "GIN": "GN",
    "GNB": "GW",
    "GUY": "GY",
    "HTI": "HT",
    "HMD": "HM",
    "VAT": "VA",
    "HND": "HN",
    "HKG": "HK",
    "HUN": "HU",
    "ISL": "IS",
    "IND": "IN",
    "IDN": "ID",
    "IRN": "IR",
    "IRQ": "IQ",
    "IRL": "IE",
    "IMN": "IM",
    "ISR": "IL",
    "ITA": "IT",
    "JAM": "JM",
    "JPN": "JP",
    "JEY": "JE",
    "JOR": "JO",
    "KAZ": "KZ",
    "KEN": "KE",
    "KIR": "KI",
    "PRK": "KP",
    "KOR": "KR",
    "KWT": "KW",
    "KGZ": "KG",
    "LAO": "LA",
    "LVA": "LV",
    "LBN": "LB",
    "LSO": "LS",
    "LBR": "LR",
    "LBY": "LY",
    "LIE": "LI",
    "LTU": "LT",
    "LUX": "LU",
    "MAC": "MO",
    "MKD": "MK",
    "MDG": "MG",
    "MWI": "MW",
    "MYS": "MY",
    "MDV": "MV",
    "MLI": "ML",
    "MLT": "MT",
    "MHL": "MH",
    "MTQ": "MQ",
    "MRT": "MR",
    "MUS": "MU",
    "MYT": "YT",
    "MEX": "MX",
    "FSM": "FM",
    "MDA": "MD",
    "MCO": "MC",
    "MNG": "MN",
    "MNE": "ME",
    "MSR": "MS",
    "MAR": "MA",
    "MOZ": "MZ",
    "MMR": "MM",
    "NAM": "NA",
    "NRU": "NR",
    "NPL": "NP",
    "NLD": "NL",
    "NCL": "NC",
    "NZL": "NZ",
    "NIC": "NI",
    "NER": "NE",
    "NGA": "NG",
    "NIU": "NU",
    "NFK": "NF",
    "MNP": "MP",
    "NOR": "NO",
    "OMN": "OM",
    "PAK": "PK",
    "PLW": "PW",
    "PSE": "PS",
    "PAN": "PA",
    "PNG": "PG",
    "PRY": "PY",
    "PER": "PE",
    "PHL": "PH",
    "PCN": "PN",
    "POL": "PL",
    "PRT": "PT",
    "PRI": "PR",
    "QAT": "QA",
    "REU": "RE",
    "ROU": "RO",
    "RUS": "RU",
    "RWA": "RW",
    "BLM": "BL",
    "SHN": "SH",
    "KNA": "KN",
    "LCA": "LC",
    "MAF": "MF",
    "SPM": "PM",
    "VCT": "VC",
    "WSM": "WS",
    "SMR": "SM",
    "STP": "ST",
    "SAU": "SA",
    "SEN": "SN",
    "SRB": "RS",
    "SYC": "SC",
    "SLE": "SL",
    "SGP": "SG",
    "SXM": "SX",
    "SVK": "SK",
    "SVN": "SI",
    "SLB": "SB",
    "SOM": "SO",
    "ZAF": "ZA",
    "SGS": "GS",
    "SSD": "SS",
    "ESP": "ES",
    "LKA": "LK",
    "SDN": "SD",
    "SUR": "SR",
    "SJM": "SJ",
    "SWZ": "SZ",
    "SWE": "SE",
    "CHE": "CH",
    "SYR": "SY",
    "TWN": "TW",
    "TJK": "TJ",
    "TZA": "TZ",
    "THA": "TH",
    "TLS": "TL",
    "TGO": "TG",
    "TKL": "TK",
    "TON": "TO",
    "TTO": "TT",
    "TUN": "TN",
    "TUR": "TR",
    "TKM": "TM",
    "TCA": "TC",
    "TUV": "TV",
    "UGA": "UG",
    "UKR": "UA",
    "ARE": "AE",
    "GBR": "GB",
    "USA": "US",
    "UMI": "UM",
    "URY": "UY",
    "UZB": "UZ",
    "VUT": "VU",
    "VEN": "VE",
    "VNM": "VN",
    "VGB": "VG",
    "VIR": "VI",
    "WLF": "WF",
    "ESH": "EH",
    "YEM": "YE",
    "ZMB": "ZM",
    "ZWE": "ZW"
  }
</code></pre>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/mrhieu">
        <img alt="@mrhieu" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/1593560" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1977613" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="071263337f3a592a0d2ab6692886d5e8">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/mrhieu" class="author text-inherit">mrhieu</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1977613" class="timestamp"><relative-time datetime="2017-01-22T12:16:11Z" title="Jan 22, 2017, 5:16 AM MST">on Jan 22, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Lower case for ccode (and escaped string)</p>
<pre><code>[
  {
    "code": "af",
    "name": "Afghanistan"
  },
  {
    "code": "ax",
    "name": "Aland Islands"
  },
  {
    "code": "al",
    "name": "Albania"
  },
  {
    "code": "dz",
    "name": "Algeria"
  },
  {
    "code": "as",
    "name": "American Samoa"
  },
  {
    "code": "ad",
    "name": "Andorra"
  },
  {
    "code": "ao",
    "name": "Angola"
  },
  {
    "code": "ai",
    "name": "Anguilla"
  },
  {
    "code": "aq",
    "name": "Antarctica"
  },
  {
    "code": "ag",
    "name": "Antigua And Barbuda"
  },
  {
    "code": "ar",
    "name": "Argentina"
  },
  {
    "code": "am",
    "name": "Armenia"
  },
  {
    "code": "aw",
    "name": "Aruba"
  },
  {
    "code": "au",
    "name": "Australia"
  },
  {
    "code": "at",
    "name": "Austria"
  },
  {
    "code": "az",
    "name": "Azerbaijan"
  },
  {
    "code": "bs",
    "name": "Bahamas"
  },
  {
    "code": "bh",
    "name": "Bahrain"
  },
  {
    "code": "bd",
    "name": "Bangladesh"
  },
  {
    "code": "bb",
    "name": "Barbados"
  },
  {
    "code": "by",
    "name": "Belarus"
  },
  {
    "code": "be",
    "name": "Belgium"
  },
  {
    "code": "bz",
    "name": "Belize"
  },
  {
    "code": "bj",
    "name": "Benin"
  },
  {
    "code": "bm",
    "name": "Bermuda"
  },
  {
    "code": "bt",
    "name": "Bhutan"
  },
  {
    "code": "bo",
    "name": "Bolivia"
  },
  {
    "code": "ba",
    "name": "Bosnia And Herzegovina"
  },
  {
    "code": "bw",
    "name": "Botswana"
  },
  {
    "code": "bv",
    "name": "Bouvet Island"
  },
  {
    "code": "br",
    "name": "Brazil"
  },
  {
    "code": "io",
    "name": "British Indian Ocean Territory"
  },
  {
    "code": "bn",
    "name": "Brunei Darussalam"
  },
  {
    "code": "bg",
    "name": "Bulgaria"
  },
  {
    "code": "bf",
    "name": "Burkina Faso"
  },
  {
    "code": "bi",
    "name": "Burundi"
  },
  {
    "code": "kh",
    "name": "Cambodia"
  },
  {
    "code": "cm",
    "name": "Cameroon"
  },
  {
    "code": "ca",
    "name": "Canada"
  },
  {
    "code": "cv",
    "name": "Cape Verde"
  },
  {
    "code": "ky",
    "name": "Cayman Islands"
  },
  {
    "code": "cf",
    "name": "Central African Republic"
  },
  {
    "code": "td",
    "name": "Chad"
  },
  {
    "code": "cl",
    "name": "Chile"
  },
  {
    "code": "cn",
    "name": "China"
  },
  {
    "code": "cx",
    "name": "Christmas Island"
  },
  {
    "code": "cc",
    "name": "Cocos (Keeling) Islands"
  },
  {
    "code": "co",
    "name": "Colombia"
  },
  {
    "code": "km",
    "name": "Comoros"
  },
  {
    "code": "cg",
    "name": "Congo"
  },
  {
    "code": "cd",
    "name": "Congo, Democratic Republic"
  },
  {
    "code": "ck",
    "name": "Cook Islands"
  },
  {
    "code": "cr",
    "name": "Costa Rica"
  },
  {
    "code": "ci",
    "name": "Cote D'Ivoire"
  },
  {
    "code": "hr",
    "name": "Croatia"
  },
  {
    "code": "cu",
    "name": "Cuba"
  },
  {
    "code": "cy",
    "name": "Cyprus"
  },
  {
    "code": "cz",
    "name": "Czech Republic"
  },
  {
    "code": "dk",
    "name": "Denmark"
  },
  {
    "code": "dj",
    "name": "Djibouti"
  },
  {
    "code": "dm",
    "name": "Dominica"
  },
  {
    "code": "do",
    "name": "Dominican Republic"
  },
  {
    "code": "ec",
    "name": "Ecuador"
  },
  {
    "code": "eg",
    "name": "Egypt"
  },
  {
    "code": "sv",
    "name": "El Salvador"
  },
  {
    "code": "gq",
    "name": "Equatorial Guinea"
  },
  {
    "code": "er",
    "name": "Eritrea"
  },
  {
    "code": "ee",
    "name": "Estonia"
  },
  {
    "code": "et",
    "name": "Ethiopia"
  },
  {
    "code": "fk",
    "name": "Falkland Islands (Malvinas)"
  },
  {
    "code": "fo",
    "name": "Faroe Islands"
  },
  {
    "code": "fj",
    "name": "Fiji"
  },
  {
    "code": "fi",
    "name": "Finland"
  },
  {
    "code": "fr",
    "name": "France"
  },
  {
    "code": "gf",
    "name": "French Guiana"
  },
  {
    "code": "pf",
    "name": "French Polynesia"
  },
  {
    "code": "tf",
    "name": "French Southern Territories"
  },
  {
    "code": "ga",
    "name": "Gabon"
  },
  {
    "code": "gm",
    "name": "Gambia"
  },
  {
    "code": "ge",
    "name": "Georgia"
  },
  {
    "code": "de",
    "name": "Germany"
  },
  {
    "code": "gh",
    "name": "Ghana"
  },
  {
    "code": "gi",
    "name": "Gibraltar"
  },
  {
    "code": "gr",
    "name": "Greece"
  },
  {
    "code": "gl",
    "name": "Greenland"
  },
  {
    "code": "gd",
    "name": "Grenada"
  },
  {
    "code": "gp",
    "name": "Guadeloupe"
  },
  {
    "code": "gu",
    "name": "Guam"
  },
  {
    "code": "gt",
    "name": "Guatemala"
  },
  {
    "code": "gg",
    "name": "Guernsey"
  },
  {
    "code": "gn",
    "name": "Guinea"
  },
  {
    "code": "gw",
    "name": "Guinea-Bissau"
  },
  {
    "code": "gy",
    "name": "Guyana"
  },
  {
    "code": "ht",
    "name": "Haiti"
  },
  {
    "code": "hm",
    "name": "Heard Island &amp; Mcdonald Islands"
  },
  {
    "code": "va",
    "name": "Holy See (Vatican City State)"
  },
  {
    "code": "hn",
    "name": "Honduras"
  },
  {
    "code": "hk",
    "name": "Hong Kong"
  },
  {
    "code": "hu",
    "name": "Hungary"
  },
  {
    "code": "is",
    "name": "Iceland"
  },
  {
    "code": "in",
    "name": "India"
  },
  {
    "code": "id",
    "name": "Indonesia"
  },
  {
    "code": "ir",
    "name": "Iran, Islamic Republic Of"
  },
  {
    "code": "iq",
    "name": "Iraq"
  },
  {
    "code": "ie",
    "name": "Ireland"
  },
  {
    "code": "im",
    "name": "Isle Of Man"
  },
  {
    "code": "il",
    "name": "Israel"
  },
  {
    "code": "it",
    "name": "Italy"
  },
  {
    "code": "jm",
    "name": "Jamaica"
  },
  {
    "code": "jp",
    "name": "Japan"
  },
  {
    "code": "je",
    "name": "Jersey"
  },
  {
    "code": "jo",
    "name": "Jordan"
  },
  {
    "code": "kz",
    "name": "Kazakhstan"
  },
  {
    "code": "ke",
    "name": "Kenya"
  },
  {
    "code": "ki",
    "name": "Kiribati"
  },
  {
    "code": "kr",
    "name": "Korea"
  },
  {
    "code": "kw",
    "name": "Kuwait"
  },
  {
    "code": "kg",
    "name": "Kyrgyzstan"
  },
  {
    "code": "la",
    "name": "Lao People's Democratic Republic"
  },
  {
    "code": "lv",
    "name": "Latvia"
  },
  {
    "code": "lb",
    "name": "Lebanon"
  },
  {
    "code": "ls",
    "name": "Lesotho"
  },
  {
    "code": "lr",
    "name": "Liberia"
  },
  {
    "code": "ly",
    "name": "Libyan Arab Jamahiriya"
  },
  {
    "code": "li",
    "name": "Liechtenstein"
  },
  {
    "code": "lt",
    "name": "Lithuania"
  },
  {
    "code": "lu",
    "name": "Luxembourg"
  },
  {
    "code": "mo",
    "name": "Macao"
  },
  {
    "code": "mk",
    "name": "Macedonia"
  },
  {
    "code": "mg",
    "name": "Madagascar"
  },
  {
    "code": "mw",
    "name": "Malawi"
  },
  {
    "code": "my",
    "name": "Malaysia"
  },
  {
    "code": "mv",
    "name": "Maldives"
  },
  {
    "code": "ml",
    "name": "Mali"
  },
  {
    "code": "mt",
    "name": "Malta"
  },
  {
    "code": "mh",
    "name": "Marshall Islands"
  },
  {
    "code": "mq",
    "name": "Martinique"
  },
  {
    "code": "mr",
    "name": "Mauritania"
  },
  {
    "code": "mu",
    "name": "Mauritius"
  },
  {
    "code": "yt",
    "name": "Mayotte"
  },
  {
    "code": "mx",
    "name": "Mexico"
  },
  {
    "code": "fm",
    "name": "Micronesia, Federated States Of"
  },
  {
    "code": "md",
    "name": "Moldova"
  },
  {
    "code": "mc",
    "name": "Monaco"
  },
  {
    "code": "mn",
    "name": "Mongolia"
  },
  {
    "code": "me",
    "name": "Montenegro"
  },
  {
    "code": "ms",
    "name": "Montserrat"
  },
  {
    "code": "ma",
    "name": "Morocco"
  },
  {
    "code": "mz",
    "name": "Mozambique"
  },
  {
    "code": "mm",
    "name": "Myanmar"
  },
  {
    "code": "na",
    "name": "Namibia"
  },
  {
    "code": "nr",
    "name": "Nauru"
  },
  {
    "code": "np",
    "name": "Nepal"
  },
  {
    "code": "nl",
    "name": "Netherlands"
  },
  {
    "code": "an",
    "name": "Netherlands Antilles"
  },
  {
    "code": "nc",
    "name": "New Caledonia"
  },
  {
    "code": "nz",
    "name": "New Zealand"
  },
  {
    "code": "ni",
    "name": "Nicaragua"
  },
  {
    "code": "ne",
    "name": "Niger"
  },
  {
    "code": "ng",
    "name": "Nigeria"
  },
  {
    "code": "nu",
    "name": "Niue"
  },
  {
    "code": "nf",
    "name": "Norfolk Island"
  },
  {
    "code": "mp",
    "name": "Northern Mariana Islands"
  },
  {
    "code": "no",
    "name": "Norway"
  },
  {
    "code": "om",
    "name": "Oman"
  },
  {
    "code": "pk",
    "name": "Pakistan"
  },
  {
    "code": "pw",
    "name": "Palau"
  },
  {
    "code": "ps",
    "name": "Palestinian Territory, Occupied"
  },
  {
    "code": "pa",
    "name": "Panama"
  },
  {
    "code": "pg",
    "name": "Papua New Guinea"
  },
  {
    "code": "py",
    "name": "Paraguay"
  },
  {
    "code": "pe",
    "name": "Peru"
  },
  {
    "code": "ph",
    "name": "Philippines"
  },
  {
    "code": "pn",
    "name": "Pitcairn"
  },
  {
    "code": "pl",
    "name": "Poland"
  },
  {
    "code": "pt",
    "name": "Portugal"
  },
  {
    "code": "pr",
    "name": "Puerto Rico"
  },
  {
    "code": "qa",
    "name": "Qatar"
  },
  {
    "code": "re",
    "name": "Reunion"
  },
  {
    "code": "ro",
    "name": "Romania"
  },
  {
    "code": "ru",
    "name": "Russian Federation"
  },
  {
    "code": "rw",
    "name": "Rwanda"
  },
  {
    "code": "bl",
    "name": "Saint Barthelemy"
  },
  {
    "code": "sh",
    "name": "Saint Helena"
  },
  {
    "code": "kn",
    "name": "Saint Kitts And Nevis"
  },
  {
    "code": "lc",
    "name": "Saint Lucia"
  },
  {
    "code": "mf",
    "name": "Saint Martin"
  },
  {
    "code": "pm",
    "name": "Saint Pierre And Miquelon"
  },
  {
    "code": "vc",
    "name": "Saint Vincent And Grenadines"
  },
  {
    "code": "ws",
    "name": "Samoa"
  },
  {
    "code": "sm",
    "name": "San Marino"
  },
  {
    "code": "st",
    "name": "Sao Tome And Principe"
  },
  {
    "code": "sa",
    "name": "Saudi Arabia"
  },
  {
    "code": "sn",
    "name": "Senegal"
  },
  {
    "code": "rs",
    "name": "Serbia"
  },
  {
    "code": "sc",
    "name": "Seychelles"
  },
  {
    "code": "sl",
    "name": "Sierra Leone"
  },
  {
    "code": "sg",
    "name": "Singapore"
  },
  {
    "code": "sk",
    "name": "Slovakia"
  },
  {
    "code": "si",
    "name": "Slovenia"
  },
  {
    "code": "sb",
    "name": "Solomon Islands"
  },
  {
    "code": "so",
    "name": "Somalia"
  },
  {
    "code": "za",
    "name": "South Africa"
  },
  {
    "code": "gs",
    "name": "South Georgia And Sandwich Isl."
  },
  {
    "code": "es",
    "name": "Spain"
  },
  {
    "code": "lk",
    "name": "Sri Lanka"
  },
  {
    "code": "sd",
    "name": "Sudan"
  },
  {
    "code": "sr",
    "name": "Suriname"
  },
  {
    "code": "sj",
    "name": "Svalbard And Jan Mayen"
  },
  {
    "code": "sz",
    "name": "Swaziland"
  },
  {
    "code": "se",
    "name": "Sweden"
  },
  {
    "code": "ch",
    "name": "Switzerland"
  },
  {
    "code": "sy",
    "name": "Syrian Arab Republic"
  },
  {
    "code": "tw",
    "name": "Taiwan"
  },
  {
    "code": "tj",
    "name": "Tajikistan"
  },
  {
    "code": "tz",
    "name": "Tanzania"
  },
  {
    "code": "th",
    "name": "Thailand"
  },
  {
    "code": "tl",
    "name": "Timor-Leste"
  },
  {
    "code": "tg",
    "name": "Togo"
  },
  {
    "code": "tk",
    "name": "Tokelau"
  },
  {
    "code": "to",
    "name": "Tonga"
  },
  {
    "code": "tt",
    "name": "Trinidad And Tobago"
  },
  {
    "code": "tn",
    "name": "Tunisia"
  },
  {
    "code": "tr",
    "name": "Turkey"
  },
  {
    "code": "tm",
    "name": "Turkmenistan"
  },
  {
    "code": "tc",
    "name": "Turks And Caicos Islands"
  },
  {
    "code": "tv",
    "name": "Tuvalu"
  },
  {
    "code": "ug",
    "name": "Uganda"
  },
  {
    "code": "ua",
    "name": "Ukraine"
  },
  {
    "code": "ae",
    "name": "United Arab Emirates"
  },
  {
    "code": "gb",
    "name": "United Kingdom"
  },
  {
    "code": "us",
    "name": "United States"
  },
  {
    "code": "um",
    "name": "United States Outlying Islands"
  },
  {
    "code": "uy",
    "name": "Uruguay"
  },
  {
    "code": "uz",
    "name": "Uzbekistan"
  },
  {
    "code": "vu",
    "name": "Vanuatu"
  },
  {
    "code": "ve",
    "name": "Venezuela"
  },
  {
    "code": "vn",
    "name": "Viet Nam"
  },
  {
    "code": "vg",
    "name": "Virgin Islands, British"
  },
  {
    "code": "vi",
    "name": "Virgin Islands, U.S."
  },
  {
    "code": "wf",
    "name": "Wallis And Futuna"
  },
  {
    "code": "eh",
    "name": "Western Sahara"
  },
  {
    "code": "ye",
    "name": "Yemen"
  },
  {
    "code": "zm",
    "name": "Zambia"
  },
  {
    "code": "zw",
    "name": "Zimbabwe"
  }
]
</code></pre>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/djowinz">
        <img alt="@djowinz" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/1612549" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-1998518" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="9bf37f1857087c30ad38fde738facdb2">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/djowinz" class="author text-inherit">djowinz</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-1998518" class="timestamp"><relative-time datetime="2017-02-15T02:11:58Z" title="Feb 14, 2017, 7:11 PM MST">on Feb 14, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>This doesn't include North Korea... Be careful when just copy / pasting this.</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/cdufault">
        <img alt="@cdufault" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/4854714" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-2121358" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="e895688c37d08ed7d1f2d2c45462935b">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/cdufault" class="author text-inherit">cdufault</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-2121358" class="timestamp"><relative-time datetime="2017-06-12T14:35:22Z" title="Jun 12, 2017, 8:35 AM MDT">on Jun 12, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Updated to have proper North and South Korea's<br>
var isoCountries = {<br>
'Afghanistan': 'AF',<br>
'Aland Islands': 'AX',<br>
'Albania': 'AL',<br>
'Algeria': 'DZ',<br>
'American Samoa': 'AS',<br>
'Andorra': 'AD',<br>
'Angola': 'AO',<br>
'Anguilla': 'AI',<br>
'Antarctica': 'AQ',<br>
'Antigua And Barbuda': 'AG',<br>
'Argentina': 'AR',<br>
'Armenia': 'AM',<br>
'Aruba': 'AW',<br>
'Australia': 'AU',<br>
'Austria': 'AT',<br>
'Azerbaijan': 'AZ',<br>
'Bahamas': 'BS',<br>
'Bahrain': 'BH',<br>
'Bangladesh': 'BD',<br>
'Barbados': 'BB',<br>
'Belarus': 'BY',<br>
'Belgium': 'BE',<br>
'Belize': 'BZ',<br>
'Benin': 'BJ',<br>
'Bermuda': 'BM',<br>
'Bhutan': 'BT',<br>
'Bolivia': 'BO',<br>
'Bosnia And Herzegovina': 'BA',<br>
'Botswana': 'BW',<br>
'Bouvet Island': 'BV',<br>
'Brazil': 'BR',<br>
'British Indian Ocean Territory': 'IO',<br>
'Brunei Darussalam': 'BN',<br>
'Bulgaria': 'BG',<br>
'Burkina Faso': 'BF',<br>
'Burundi': 'BI',<br>
'Cambodia': 'KH',<br>
'Cameroon': 'CM',<br>
'Canada': 'CA',<br>
'Cape Verde': 'CV',<br>
'Cayman Islands': 'KY',<br>
'Central African Republic': 'CF',<br>
'Chad': 'TD',<br>
'Chile': 'CL',<br>
'China': 'CN',<br>
'Christmas Island': 'CX',<br>
'Cocos (Keeling) Islands': 'CC',<br>
'Colombia': 'CO',<br>
'Comoros': 'KM',<br>
'Congo': 'CG',<br>
'Congo, Democratic Republic': 'CD',<br>
'Cook Islands': 'CK',<br>
'Costa Rica': 'CR',<br>
'Cote D'Ivoire': 'CI',<br>
'Croatia': 'HR',<br>
'Cuba': 'CU',<br>
'Cyprus': 'CY',<br>
'Czech Republic': 'CZ',<br>
'Denmark': 'DK',<br>
'Djibouti': 'DJ',<br>
'Dominica': 'DM',<br>
'Dominican Republic': 'DO',<br>
'Ecuador': 'EC',<br>
'Egypt': 'EG',<br>
'El Salvador': 'SV',<br>
'Equatorial Guinea': 'GQ',<br>
'Eritrea': 'ER',<br>
'Estonia': 'EE',<br>
'Ethiopia': 'ET',<br>
'Falkland Islands': 'FK',<br>
'Faroe Islands': 'FO',<br>
'Fiji': 'FJ',<br>
'Finland': 'FI',<br>
'France': 'FR',<br>
'French Guiana': 'GF',<br>
'French Polynesia': 'PF',<br>
'French Southern Territories': 'TF',<br>
'Gabon': 'GA',<br>
'Gambia': 'GM',<br>
'Georgia': 'GE',<br>
'Germany': 'DE',<br>
'Ghana': 'GH',<br>
'Gibraltar': 'GI',<br>
'Greece': 'GR',<br>
'Greenland': 'GL',<br>
'Grenada': 'GD',<br>
'Guadeloupe': 'GP',<br>
'Guam': 'GU',<br>
'Guatemala': 'GT',<br>
'Guernsey': 'GG',<br>
'Guinea': 'GN',<br>
'Guinea-Bissau': 'GW',<br>
'Guyana': 'GY',<br>
'Haiti': 'HT',<br>
'Heard Island &amp; Mcdonald Islands': 'HM',<br>
'Holy See (Vatican City State)': 'VA',<br>
'Honduras': 'HN',<br>
'Hong Kong': 'HK',<br>
'Hungary': 'HU',<br>
'Iceland': 'IS',<br>
'India': 'IN',<br>
'Indonesia': 'ID',<br>
'Iran, Islamic Republic Of': 'IR',<br>
'Iraq': 'IQ',<br>
'Ireland': 'IE',<br>
'Isle Of Man': 'IM',<br>
'Israel': 'IL',<br>
'Italy': 'IT',<br>
'Jamaica': 'JM',<br>
'Japan': 'JP',<br>
'Jersey': 'JE',<br>
'Jordan': 'JO',<br>
'Kazakhstan': 'KZ',<br>
'Kenya': 'KE',<br>
'Kiribati': 'KI',<br>
'Republic of Korea': 'KR',<br>
'South Korea': 'KR',<br>
"Democratic People's Republic of Korea": 'KP',<br>
'North Korea': 'KP',<br>
'Kuwait': 'KW',<br>
'Kyrgyzstan': 'KG',<br>
'Lao People's Democratic Republic': 'LA',<br>
'Latvia': 'LV',<br>
'Lebanon': 'LB',<br>
'Lesotho': 'LS',<br>
'Liberia': 'LR',<br>
'Libyan Arab Jamahiriya': 'LY',<br>
'Liechtenstein': 'LI',<br>
'Lithuania': 'LT',<br>
'Luxembourg': 'LU',<br>
'Macao': 'MO',<br>
'Macedonia': 'MK',<br>
'Madagascar': 'MG',<br>
'Malawi': 'MW',<br>
'Malaysia': 'MY',<br>
'Maldives': 'MV',<br>
'Mali': 'ML',<br>
'Malta': 'MT',<br>
'Marshall Islands': 'MH',<br>
'Martinique': 'MQ',<br>
'Mauritania': 'MR',<br>
'Mauritius': 'MU',<br>
'Mayotte': 'YT',<br>
'Mexico': 'MX',<br>
'Micronesia, Federated States Of': 'FM',<br>
'Moldova': 'MD',<br>
'Monaco': 'MC',<br>
'Mongolia': 'MN',<br>
'Montenegro': 'ME',<br>
'Montserrat': 'MS',<br>
'Morocco': 'MA',<br>
'Mozambique': 'MZ',<br>
'Myanmar': 'MM',<br>
'Namibia': 'NA',<br>
'Nauru': 'NR',<br>
'Nepal': 'NP',<br>
'Netherlands': 'NL',<br>
'Netherlands Antilles': 'AN',<br>
'New Caledonia': 'NC',<br>
'New Zealand': 'NZ',<br>
'Nicaragua': 'NI',<br>
'Niger': 'NE',<br>
'Nigeria': 'NG',<br>
'Niue': 'NU',<br>
'Norfolk Island': 'NF',<br>
'Northern Mariana Islands': 'MP',<br>
'Norway': 'NO',<br>
'Oman': 'OM',<br>
'Pakistan': 'PK',<br>
'Palau': 'PW',<br>
'Palestinian Territory, Occupied': 'PS',<br>
'Panama': 'PA',<br>
'Papua New Guinea': 'PG',<br>
'Paraguay': 'PY',<br>
'Peru': 'PE',<br>
'Philippines': 'PH',<br>
'Pitcairn': 'PN',<br>
'Poland': 'PL',<br>
'Portugal': 'PT',<br>
'Puerto Rico': 'PR',<br>
'Qatar': 'QA',<br>
'Reunion': 'RE',<br>
'Romania': 'RO',<br>
'Russian Federation': 'RU',<br>
'Rwanda': 'RW',<br>
'Saint Barthelemy': 'BL',<br>
'Saint Helena': 'SH',<br>
'Saint Kitts And Nevis': 'KN',<br>
'Saint Lucia': 'LC',<br>
'Saint Martin': 'MF',<br>
'Saint Pierre And Miquelon': 'PM',<br>
'Saint Vincent And Grenadines': 'VC',<br>
'Samoa': 'WS',<br>
'San Marino': 'SM',<br>
'Sao Tome And Principe': 'ST',<br>
'Saudi Arabia': 'SA',<br>
'Senegal': 'SN',<br>
'Serbia': 'RS',<br>
'Seychelles': 'SC',<br>
'Sierra Leone': 'SL',<br>
'Singapore': 'SG',<br>
'Slovakia': 'SK',<br>
'Slovenia': 'SI',<br>
'Solomon Islands': 'SB',<br>
'Somalia': 'SO',<br>
'South Africa': 'ZA',<br>
'South Georgia And Sandwich Isl.': 'GS',<br>
'Spain': 'ES',<br>
'Sri Lanka': 'LK',<br>
'Sudan': 'SD',<br>
'Suriname': 'SR',<br>
'Svalbard And Jan Mayen': 'SJ',<br>
'Swaziland': 'SZ',<br>
'Sweden': 'SE',<br>
'Switzerland': 'CH',<br>
'Syrian Arab Republic': 'SY',<br>
'Taiwan': 'TW',<br>
'Tajikistan': 'TJ',<br>
'Tanzania': 'TZ',<br>
'Thailand': 'TH',<br>
'Timor-Leste': 'TL',<br>
'Togo': 'TG',<br>
'Tokelau': 'TK',<br>
'Tonga': 'TO',<br>
'Trinidad And Tobago': 'TT',<br>
'Tunisia': 'TN',<br>
'Turkey': 'TR',<br>
'Turkmenistan': 'TM',<br>
'Turks And Caicos Islands': 'TC',<br>
'Tuvalu': 'TV',<br>
'Uganda': 'UG',<br>
'Ukraine': 'UA',<br>
'United Arab Emirates': 'AE',<br>
'United Kingdom': 'GB',<br>
'United States': 'US',<br>
'United States Outlying Islands': 'UM',<br>
'Uruguay': 'UY',<br>
'Uzbekistan': 'UZ',<br>
'Vanuatu': 'VU',<br>
'Venezuela': 'VE',<br>
'Vietnam': 'VN',<br>
'Virgin Islands, British': 'VG',<br>
'Virgin Islands, U.S.': 'VI',<br>
'Wallis And Futuna': 'WF',<br>
'Western Sahara': 'EH',<br>
'Yemen': 'YE',<br>
'Zambia': 'ZM',<br>
'Zimbabwe': 'ZW'<br>
};</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/alrms">
        <img alt="@alrms" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/28054369" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-2129730" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="4efe590ec5485493675b5139b969eb6b">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/alrms" class="author text-inherit">alrms</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-2129730" class="timestamp"><relative-time datetime="2017-06-22T08:20:06Z" title="Jun 22, 2017, 2:20 AM MDT">on Jun 22, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>That's great but i was wondering if we can transform the object to a function that returns this object ;)?</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>

  
  <div class="timeline-comment-wrapper js-comment-container">


        


<div class="">
  <div class="avatar-parent-child timeline-comment-avatar position-relative">
      <a href="https://gist.github.com/kspearrin">
        <img alt="@kspearrin" class="avatar rounded-1" height="44" src="./ISOCountryCodes_files/1190944" width="44">
      </a>


  </div>
</div>


      
  <div id="gistcomment-2232808" class="comment previewable-edit js-comment js-task-list-container timeline-comment js-reorderable-task-lists reorderable-task-lists " data-body-version="b476132f3022f6bc567aba5036671c6e">

    
<div class="timeline-comment-header clearfix">
  <div class="timeline-comment-actions">
    







<!-- Closes div if we are showing the kebab menu -->

  </div>

    



  <h3 class="timeline-comment-header-text f5 text-normal">

    <strong>
      

  <a href="https://gist.github.com/kspearrin" class="author text-inherit">kspearrin</a>
  

    </strong>

    commented

    <a href="https://gist.github.com/maephisto/9228207#gistcomment-2232808" class="timestamp"><relative-time datetime="2017-10-18T16:47:16Z" title="Oct 18, 2017, 10:47 AM MDT">on Oct 18, 2017</relative-time></a>


  </h3>
</div>


    <div class="edit-comment-hide">
      
<table class="d-block">
  <tbody class="d-block">
    <tr class="d-block">
      <td class="d-block comment-body markdown-body  js-comment-body">
          <p>Lowercase name =&gt; code mapping:</p>
<pre><code>var isoCountries = {
  afghanistan: "AF",
  "aland islands": "AX",
  albania: "AL",
  algeria: "DZ",
  "american samoa": "AS",
  andorra: "AD",
  angola: "AO",
  anguilla: "AI",
  antarctica: "AQ",
  "antigua and barbuda": "AG",
  argentina: "AR",
  armenia: "AM",
  aruba: "AW",
  australia: "AU",
  austria: "AT",
  azerbaijan: "AZ",
  bahamas: "BS",
  bahrain: "BH",
  bangladesh: "BD",
  barbados: "BB",
  belarus: "BY",
  belgium: "BE",
  belize: "BZ",
  benin: "BJ",
  bermuda: "BM",
  bhutan: "BT",
  bolivia: "BO",
  "bosnia and herzegovina": "BA",
  botswana: "BW",
  "bouvet island": "BV",
  brazil: "BR",
  "british indian ocean territory": "IO",
  "brunei darussalam": "BN",
  bulgaria: "BG",
  "burkina faso": "BF",
  burundi: "BI",
  cambodia: "KH",
  cameroon: "CM",
  canada: "CA",
  "cape verde": "CV",
  "cayman islands": "KY",
  "central african republic": "CF",
  chad: "TD",
  chile: "CL",
  china: "CN",
  "christmas island": "CX",
  "cocos (keeling) islands": "CC",
  colombia: "CO",
  comoros: "KM",
  congo: "CG",
  "congo, democratic republic": "CD",
  "cook islands": "CK",
  "costa rica": "CR",
  "cote d'ivoire": "CI",
  croatia: "HR",
  cuba: "CU",
  cyprus: "CY",
  "czech republic": "CZ",
  denmark: "DK",
  djibouti: "DJ",
  dominica: "DM",
  "dominican republic": "DO",
  ecuador: "EC",
  egypt: "EG",
  "el salvador": "SV",
  "equatorial guinea": "GQ",
  eritrea: "ER",
  estonia: "EE",
  ethiopia: "ET",
  "falkland islands": "FK",
  "faroe islands": "FO",
  fiji: "FJ",
  finland: "FI",
  france: "FR",
  "french guiana": "GF",
  "french polynesia": "PF",
  "french southern territories": "TF",
  gabon: "GA",
  gambia: "GM",
  georgia: "GE",
  germany: "DE",
  ghana: "GH",
  gibraltar: "GI",
  greece: "GR",
  greenland: "GL",
  grenada: "GD",
  guadeloupe: "GP",
  guam: "GU",
  guatemala: "GT",
  guernsey: "GG",
  guinea: "GN",
  "guinea-bissau": "GW",
  guyana: "GY",
  haiti: "HT",
  "heard island &amp; mcdonald islands": "HM",
  "holy see (vatican city state)": "VA",
  honduras: "HN",
  "hong kong": "HK",
  hungary: "HU",
  iceland: "IS",
  india: "IN",
  indonesia: "ID",
  "iran, islamic republic of": "IR",
  iraq: "IQ",
  ireland: "IE",
  "isle of man": "IM",
  israel: "IL",
  italy: "IT",
  jamaica: "JM",
  japan: "JP",
  jersey: "JE",
  jordan: "JO",
  kazakhstan: "KZ",
  kenya: "KE",
  kiribati: "KI",
  "republic of korea": "KR",
  "south korea": "KR",
  "democratic people's republic of korea": "KP",
  "north korea": "KP",
  kuwait: "KW",
  kyrgyzstan: "KG",
  "lao people's democratic republic": "LA",
  latvia: "LV",
  lebanon: "LB",
  lesotho: "LS",
  liberia: "LR",
  "libyan arab jamahiriya": "LY",
  liechtenstein: "LI",
  lithuania: "LT",
  luxembourg: "LU",
  macao: "MO",
  macedonia: "MK",
  madagascar: "MG",
  malawi: "MW",
  malaysia: "MY",
  maldives: "MV",
  mali: "ML",
  malta: "MT",
  "marshall islands": "MH",
  martinique: "MQ",
  mauritania: "MR",
  mauritius: "MU",
  mayotte: "YT",
  mexico: "MX",
  "micronesia, federated states of": "FM",
  moldova: "MD",
  monaco: "MC",
  mongolia: "MN",
  montenegro: "ME",
  montserrat: "MS",
  morocco: "MA",
  mozambique: "MZ",
  myanmar: "MM",
  namibia: "NA",
  nauru: "NR",
  nepal: "NP",
  netherlands: "NL",
  "netherlands antilles": "AN",
  "new caledonia": "NC",
  "new zealand": "NZ",
  nicaragua: "NI",
  niger: "NE",
  nigeria: "NG",
  niue: "NU",
  "norfolk island": "NF",
  "northern mariana islands": "MP",
  norway: "NO",
  oman: "OM",
  pakistan: "PK",
  palau: "PW",
  "palestinian territory, occupied": "PS",
  panama: "PA",
  "papua new guinea": "PG",
  paraguay: "PY",
  peru: "PE",
  philippines: "PH",
  pitcairn: "PN",
  poland: "PL",
  portugal: "PT",
  "puerto rico": "PR",
  qatar: "QA",
  reunion: "RE",
  romania: "RO",
  "russian federation": "RU",
  rwanda: "RW",
  "saint barthelemy": "BL",
  "saint helena": "SH",
  "saint kitts and nevis": "KN",
  "saint lucia": "LC",
  "saint martin": "MF",
  "saint pierre and miquelon": "PM",
  "saint vincent and grenadines": "VC",
  samoa: "WS",
  "san marino": "SM",
  "sao tome and principe": "ST",
  "saudi arabia": "SA",
  senegal: "SN",
  serbia: "RS",
  seychelles: "SC",
  "sierra leone": "SL",
  singapore: "SG",
  slovakia: "SK",
  slovenia: "SI",
  "solomon islands": "SB",
  somalia: "SO",
  "south africa": "ZA",
  "south georgia and sandwich isl.": "GS",
  spain: "ES",
  "sri lanka": "LK",
  sudan: "SD",
  suriname: "SR",
  "svalbard and jan mayen": "SJ",
  swaziland: "SZ",
  sweden: "SE",
  switzerland: "CH",
  "syrian arab republic": "SY",
  taiwan: "TW",
  tajikistan: "TJ",
  tanzania: "TZ",
  thailand: "TH",
  "timor-leste": "TL",
  togo: "TG",
  tokelau: "TK",
  tonga: "TO",
  "trinidad and tobago": "TT",
  tunisia: "TN",
  turkey: "TR",
  turkmenistan: "TM",
  "turks and caicos islands": "TC",
  tuvalu: "TV",
  uganda: "UG",
  ukraine: "UA",
  "united arab emirates": "AE",
  "united kingdom": "GB",
  "united states": "US",
  "united states outlying islands": "UM",
  uruguay: "UY",
  uzbekistan: "UZ",
  vanuatu: "VU",
  venezuela: "VE",
  vietnam: "VN",
  "virgin islands, british": "VG",
  "virgin islands, u.s.": "VI",
  "wallis and futuna": "WF",
  "western sahara": "EH",
  yemen: "YE",
  zambia: "ZM",
  zimbabwe: "ZW"
};
</code></pre>
      </td>
    </tr>
  </tbody>
</table>


    </div>

  </div>

  </div>



<!-- Rendered timeline since 2018-01-29 21:20:58 -->
<div id="partial-timeline-marker" class="js-timeline-marker js-updatable-content" data-url="/maephisto/9228207/show_partial?partial=gist%2Ftimeline_marker&amp;since=1517289658" data-last-modified="Tue, 30 Jan 2018 05:20:58 GMT">
</div>


        <div class="discussion-timeline-actions">
            <div class="timeline-comment-wrapper timeline-new-comment js-comment-container">
  <a href="https://gist.github.com/RGerboth"><img alt="@RGerboth" class="timeline-comment-avatar" height="44" src="./ISOCountryCodes_files/33574853(1)" width="44"></a>

  <!-- '"` --><!-- </textarea></xmp> --><form accept-charset="UTF-8" action="https://gist.github.com/maephisto/9228207/comments" class="js-new-comment-form js-needs-timeline-marker-header" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="P0x26utQlbJAuco33MKBscTpOmCN7mC1Lmg33XBf/b1ZmcPnMPmiBy+ew7Jt+8ogePjTJkOpLA1QotqQlwsIXw=="></div>
    <div class="timeline-comment">
      <div class="js-suggester-container  js-previewable-comment-form previewable-comment-form write-selected" data-preview-url="/preview?markdown_unsupported=false&amp;subject=9228207&amp;subject_type=Gist" data-preview-authenticity-token="OfTd0qOdqsE/lmPv21UmpziNWkMguQYP8SVWTX3JXQSCwa8jgVvxUFxJez/GnuukxM19OPqA7U/wTsbjHulOig==">
  <div class="comment-form-head tabnav">
      <div class="js-toolbar toolbar-commenting">
  <div class="toolbar-group">
    <div class="toolbar-item dropdown js-menu-container">
      <button type="button" tabindex="-1" class="js-menu-target menu-target tooltipped tooltipped-n" aria-label="Add header text" aria-expanded="false" aria-haspopup="true">
        <svg aria-hidden="true" class="octicon octicon-text-size" height="16" version="1.1" viewBox="0 0 18 16" width="18"><path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"></path></svg>
        <span class="dropdown-caret"></span>
      </button>

      <div class="dropdown-menu-content js-menu-content">
        <ul class="dropdown-menu dropdown-menu-s">
          <button type="button" class="js-toolbar-item dropdown-item dropdown-header1" data-prefix="# " data-ga-click="Markdown Toolbar, click, header1">
            Header
          </button>
          <button type="button" class="js-toolbar-item dropdown-item dropdown-header2" data-prefix="## " data-ga-click="Markdown Toolbar, click, header2">
            Header
          </button>
          <button type="button" class="js-toolbar-item dropdown-item dropdown-header3" data-prefix="### " data-ga-click="Markdown Toolbar, click, header3">
            Header
          </button>
        </ul>
      </div>
    </div>

    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add bold text &lt;ctrl+b&gt;" data-prefix="**" data-suffix="**" data-toolbar-hotkey="b" data-ga-click="Markdown Toolbar, click, bold" data-trim-first="">
      <svg aria-hidden="true" class="octicon octicon-bold" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path></svg>
    </button>

    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add italic text &lt;ctrl+i&gt;" data-prefix="_" data-suffix="_" data-toolbar-hotkey="i" data-ga-click="Markdown Toolbar, click, italic" data-trim-first="">
      <svg aria-hidden="true" class="octicon octicon-italic" height="16" version="1.1" viewBox="0 0 6 16" width="6"><path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"></path></svg>
    </button>
  </div>

  <div class="toolbar-group">
    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Insert a quote" data-prefix="&gt; " data-multiline="true" data-ga-click="Markdown Toolbar, click, quote" data-surround-with-newlines="">
      <svg aria-hidden="true" class="octicon octicon-quote" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"></path></svg>
    </button>

    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Insert code" data-prefix="`" data-suffix="`" data-block-prefix="```" data-block-suffix="```" data-ga-click="Markdown Toolbar, click, code">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    </button>

    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add a link &lt;ctrl+k&gt;" data-prefix="[" data-suffix="](url)" data-replace-next="url" data-toolbar-hotkey="k" data-scan-for="https?://" data-ga-click="Markdown Toolbar, click, link">
      <svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
    </button>
  </div>

  <div class="toolbar-group">
    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add a bulleted list" data-multiline="true" data-prefix="- " data-ga-click="Markdown Toolbar, click, unordered list" data-surround-with-newlines="">
      <svg aria-hidden="true" class="octicon octicon-list-unordered" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z"></path></svg>
    </button>
    <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add a numbered list" data-prefix="1. " data-multiline="true" data-ga-click="Markdown Toolbar, click, ordered list" data-ordered-list="">
      <svg aria-hidden="true" class="octicon octicon-list-ordered" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 13c0 .59 0 1-.59 1H4.59C4 14 4 13.59 4 13c0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1H12zM4.59 4h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zm6.81 3H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1zM2 1h-.72c-.3.19-.58.25-1.03.34V2H1v2.14H.16V5H3v-.86H2V1zm.25 8.13c-.17 0-.45.03-.66.06.53-.56 1.14-1.25 1.14-1.89C2.71 6.52 2.17 6 1.37 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38.28 0 .48.16.48.52 0 .53-.77 1.2-1.7 2.06V10h3l-.09-.88h-.66l.01.01zm-.08 3.78v-.03c.44-.19.64-.47.64-.86 0-.7-.56-1.11-1.44-1.11-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56.83 0 1.53-.41 1.53-1.16 0-.5-.31-.81-.77-.94v.01z"></path></svg>
    </button>

      <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-n" aria-label="Add a task list" data-prefix="- [ ] " data-toolbar-hotkey="L" data-multiline="" data-ga-click="Markdown Toolbar, click, task list" data-surround-with-newlines="">
        <svg aria-hidden="true" class="octicon octicon-tasklist" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z"></path></svg>
      </button>
  </div>

  <div class="toolbar-group">

      <div class="toolbar-item select-menu select-menu-modal-right js-menu-container js-select-menu js-load-contents js-saved-reply-container" data-contents-url="/settings/replies?context=none">

        <button type="button" tabindex="-1" class="js-menu-target js-saved-reply-button menu-target tooltipped tooltipped-nw" aria-label="Insert a reply" aria-expanded="false" aria-haspopup="true" data-ga-click="Markdown Toolbar, click, saved reply">
          <svg aria-hidden="true" class="octicon octicon-reply" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z"></path></svg>
          <span class="dropdown-caret"></span>
        </button>

        <div class="select-menu-modal-holder js-menu-content js-navigation-container">
          <div class="select-menu-modal">
            <div class="select-menu-header">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Select a reply</span>
              <kbd>ctrl .</kbd>
            </div>
            <div class="js-select-menu-deferred-content"></div>
            <div class="select-menu-loading-overlay anim-pulse">
              <svg aria-hidden="true" class="octicon octicon-octoface" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-nw" aria-label="Directly mention a user or team" data-prefix="@" data-prefix-space="" data-ga-click="Markdown Toolbar, click, mention">
        <svg aria-hidden="true" class="octicon octicon-mention" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z"></path></svg>
      </button>

      <button type="button" tabindex="-1" class="js-toolbar-item toolbar-item tooltipped tooltipped-nw" aria-label="Reference an issue or pull request" data-prefix="#" data-prefix-space="" data-ga-click="Markdown Toolbar, click, reference">
        <svg aria-hidden="true" class="octicon octicon-bookmark" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path></svg>
      </button>
  </div>
</div>

      <nav class="tabnav-tabs" role="tablist">
        <button type="button" class="btn-link tabnav-tab write-tab js-write-tab selected " role="tab" aria-selected="true">Write</button>
        <button type="button" class="btn-link tabnav-tab preview-tab js-preview-tab " role="tab">Preview</button>
      </nav>
  </div>


  <div class="comment-form-error js-comment-form-error" style="display:none">    There was an error creating your Gist.
</div>
  <div class="write-content js-write-bucket js-uploadable-container js-upload-markdown-image is-default upload-enabled" data-upload-policy-url="/upload/policies/assets" data-upload-policy-authenticity-token="BpygaYGG3CFMx627/hJyHYvVxQXH7P2zgiFfTv+8aGu7LW3ku75dMC1nW+ajvxEplW275TPWGzyjluVle1cU2Q==">

    <input type="hidden" name="saved_reply_id" class="js-saved-reply-id js-resettable-field" value="" data-reset-value="">

    <textarea name="comment[body]" id="new_comment_field" placeholder="Leave a comment" aria-label="Comment body" class="form-control input-contrast comment-form-textarea js-comment-field js-improved-comment-field js-task-list-field js-quick-submit js-size-to-fit js-suggester-field js-quote-selection-target js-session-resumable "></textarea>

        <p class="drag-and-drop position-relative">
    <input accept=".gif,.jpeg,.jpg,.png" type="file" multiple="multiple" class="manual-file-chooser top-0 right-0 bottom-0 left-0 width-full ml-0 js-manual-file-chooser" aria-label="Attach files to your comment">
    <span class="default">
        Attach files by dragging &amp; dropping,
        <span class="btn-link manual-file-chooser-text">selecting them</span>, or pasting
        from the clipboard.
    </span>
    <span class="loading">
      <img alt="" height="16" src="./ISOCountryCodes_files/octocat-spinner-32.gif" width="16"> Uploading your files…
    </span>
    <span class="error bad-file">
      We don’t support that file type.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with a
        GIF, JPEG, JPG or PNG.
      </span>
    </span>
    <span class="error bad-permissions">
      Attaching documents requires write permission to this repository.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with a GIF, JPEG, JPG or PNG.
      </span>
    </span>
    <span class="error repository-required">
      We don’t support that file type.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with a GIF, JPEG, JPG or PNG.
      </span>
    </span>
    <span class="error too-big">
      Yowza, that’s a big file
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with a file smaller than 10MB.
      </span>
    </span>
    <span class="error empty">
      This file is empty.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with a file that’s not empty.
      </span>
    </span>
    <span class="error hidden-file">
      This file is hidden.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again</button> with another file.
      </span>
    </span>
    <span class="error failed-request">
      Something went really wrong, and we can’t process that file.
      <span class="drag-and-drop-error-info">
        <button type="button" class="btn-link manual-file-chooser-text">Try again.</button>
      </span>
    </span>
  </p>


    <div class="suggester-container">
      <div class="suggester js-suggester js-navigation-container" data-url="/maephisto/9228207/suggestions">
      </div>
    </div>
  </div>

  <div class="preview-content">
    <div class="comment">
  <div class="comment-body markdown-body js-preview-body">
    <p>Nothing to preview</p>
  </div>
</div>

  </div>

  <div class="float-left">
      <a class="tabnav-extra" href="https://guides.github.com/features/mastering-markdown/" target="_blank" data-ga-click="Markdown Toolbar, click, help">
        <svg aria-hidden="true" class="octicon octicon-markdown v-align-bottom" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg>
        Styling with Markdown is supported
      </a>
  </div>


  <div class="comment-form-error comment-form-bottom js-comment-update-error"></div>
</div>


      <div class="form-actions">
        <div id="partial-new-comment-form-actions">
  <button type="submit" class="btn btn-primary" data-disable-with="" data-disable-invalid="">
    Comment
  </button>
</div>

      </div>
    </div>
</form></div>

        </div>
      </div>
    </div>
</div>
  </div>

  <div class="modal-backdrop js-touch-events"></div>
</div><!-- /.container -->

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">© 2018 <span title="0.37231s from unicorn-861249823-c22j2">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com/" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com/" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com/" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-jqvDaL8uGENbC1rsifCdxmfE5RQmxtizkQ1xMGfvpSbwdKnG1vYz/z/BKuMEtJxU7/cY0IFKZlpgmUrMPtu4oQ==" src="./ISOCountryCodes_files/frameworks-8eabc368bf2e.js.download" type="application/javascript"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha512-qEI0SZyAev5bRQiIVvRQoj3oivLfBmNKnQcgy/usQmL6WlN+419vMLUy7svSGC9LCU4RjAgZeMfaEDkGJqKosw==" src="./ISOCountryCodes_files/github-a84234499c80.js.download" type="application/javascript"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="https://gist.github.com/maephisto/9228207">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="https://gist.github.com/maephisto/9228207">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>


  


</body></html>