<script>
  import FrfLogo from "./lib/FRFLogo.svelte";
</script>

<main>
  <nav>
    <FrfLogo />
  </nav>
  <section class="main-section">
    <h1>Front Range Foundry</h1>
    <article>
      <h2>Our Primer</h2>
      <p>At Front Range Foundry, we like to build. Our engineering force has a large and wide-ranging set of interests. Having worked in tech for a sum total of nearly a decade, we understand that people like to work on all kinds of interesting projects. The aim of Front Range Foundry is to facilitate and encourage those engineering interests.</p>
      <p>It's almost an adage at this point that developers eventually let their side projects fester. We don't like to see projects go by the wayside! By offering a chance for developers to find easy collaboration on their projects, we help people see their ideas come to fruition.</p>
      <p>Above all, FRF appreciates building cool stuff that works. </p>
      <hr>
    </article>
    <article>
      <h2>Our Projects</h2>
      <p>Currently, the FRF only has two projects:</p>
      <ul>
        <li>
          <h3>This Very Website</h3>
          <p>Built with basic CSS and Svelte.js. Very obviously in need of someone who's passionate about making pretty things.</p>
        </li>
        <li>
          <h3>The Jurassic Park Rust Library</h3>
          <p>A series of Rust libraries which aspires to replicate the vast array of technology required to run Jurassic Park 1993.</p>
        </li>
      </ul>
    </article>
    <hr>
    <article>
      <h2>Our Contributors</h2>
        <div class="contributor">
          <div class="contributor-pic-wrapper-wrapper">
            <div class="contributor-pic-wrapper">
              <img class="contributor-pic" src="/images/jack-ryan.png" alt="Jack Ryan" id="jack-ryan" />
            </div>
          </div>
          <p class="contributor-bio-text">My name is Jack Ryan. I am the current CTO of FinGoal and have been a programmer for more than four years. I have extensive experience in Node. I am looking to crack into Rust and am the principal developer of the J Park Project right now. I consider myself a passionate creator of both useful and useless things.</p>
      </div>
    </article>
    <hr>
    <article>
      <h2>Join the Foundry</h2>
      <p>Interested in joining the Foundry? We have live sessions every Wednesday and Friday! If you're looking to join up, email me at jack.dixon.ryan@gmail.com so I can get you invites to the various distribution channels, etc, etc.</p>
    </article>
    <div style="margin-top:10rem;"></div>
    <h1>Great Minds Think Differently.</h1>
  </section>
</main>

<style>
  .contributor-pic {
    height: 200px;
    position: relative;
    top: -50px;
  }

  .contributor-pic-wrapper {
    margin: 1rem;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
  }

  .contributor-pic-wrapper-wrapper {
    flex: 1;
  }

  .contributor-bio-text {
    flex: 4;
  }

  .contributor {
    display: flex;
    padding: 1rem;
  }
</style>
