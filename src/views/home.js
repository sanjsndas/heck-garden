import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hopeful Heartfelt Vulture</title>
        <meta property="og:title" content="Hopeful Heartfelt Vulture" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">CONTACT</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">PRIVACY POLICY</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">TERMS &amp; CONDITIONS</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text104">Pricing Plans</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1746542416774-43860459d7f3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0MTAyMHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        link1Url="/"
        link2Url="/contact"
        link3Url="/privacy"
        link4Url="/terms"
      ></Navbar2>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text105">
              Essential Gardening Security Tips
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text106">Your Gardening Agreement</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text107">
              Gardening Data Protection Measures
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text108">HECK YOUR GARDEN</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text109">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text110">Plants</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Outdoor Spaces</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text112">Landscaping</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text113">
              Customize Your Gardening Cookies
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text114">Explore More Gardening Wonders</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1522980811-53cc29445e08?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0MDYyOXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        page1Description={
          <Fragment>
            <span className="home-text115">
              Welcome to Heckyourgarden, your ultimate gardening resource!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text116">
              Discover a variety of plants and learn how to care for them.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text117">
              Get inspired to create stunning outdoor spaces with our tips and
              ideas.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text118">
              Transform your garden with our landscaping guides and techniques.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text119">Grow Your Garden Oasis</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text120">Start Cultivating Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text121">
              Explore a universe of gardening marvels. Uncover tips,
              inspiration, and expert advice to revamp your outdoor sanctuary.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text122">
              Welcome to the Heck Your Garden
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text123">Lush Garden Haven</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text124">Essential Plant Care Advice</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text125">Gardening Guidelines</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text126">
              Immerse in a spectrum of vibrant blooms and foliage to enrich your
              garden.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text127">
              Discover diverse plant species and master their nurturing
              techniques.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text128">
              Explore our Gardening Guidelines for a comprehensive view of our
              rules.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text129">Explore Gardening Tips</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text130">
              Queries or suggestions? Connect with us through our Contact
              section.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text131">
              Unveil our cookie usage and methods to personalize your
              preferences.
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text132">Gardening Policy Overview</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text133">Gardening Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text134">Join Our Gardening Community</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text135">
              Dive into our Gardening Practices to enhance your gardening
              experience.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text136">
              Need Gardening Help? Contact Us!
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text137">
              Explore our extensive gardening tips to cultivate a thriving
              garden.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text138">
              $9.99 monthly plan with extra gardening features included
            </span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text139">
              Reach out to us for inquiries about our gardening plans
            </span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text140">
              Explore the advantages of our business-oriented plan
            </span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text141">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text142">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text143">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text144">
              Read and approve our gardening terms of service for a fruitful
              experience.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text145">
              &quot;We nurture your garden with care and respect your privacy
              with our gardening privacy measures.&quot;
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text146">
              Insights on Gardening Policy Overview
            </span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text147">
              Discover our plant protection guidelines
            </span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text148">
              Find out about our subscription at $14.99 per month for gardening
              enthusiasts
            </span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text149">
              Access premium features for $29.99 per month
            </span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text150">
              View Garden Privacy Policy Details
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text152">
              Learn more about how we nurture plants
            </span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text153">Explore Gardening Guidelines</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text154">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text155">
              Contact us to learn about our yearly plan priced at $249
            </span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text156">Uncover Plant Privacy Terms</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text157">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text158">
              Opt for our annual plan at $449 for unlimited access
            </span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text159">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text160">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text161">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text162">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text163">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text164">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text165">
              Discover a variety of gardening tutorials and advice
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text166">
              Get bi-weekly plant care recommendations
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text167">Design your own privacy policy</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text168">
              Explore tailored landscaping inspirations
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text169">
              Uncover virtual gardening workshops every month
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text170">
              Gain VIP entry to gardening webinar sessions
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text171">
              Transform your garden oasis with our expert guidance
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text172">
              Get tailor-made garden design blueprints just for you
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text173">
              Engage in exclusive consultations with gardening experts
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text174">
              Experience premium customer support for your gardening needs
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text175">
              Craft a personalized garden privacy plan
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text176">
              Create a unique privacy policy for your garden
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text186">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text187">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text188">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text189">
              Make informed plant choices for a thriving garden
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text190">
              Create a Harmonious Outdoor Oasis
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Precise Planting Techniques</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text192">Cultivate and Delight</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text193">
              Choose plants that thrive in your local climate and match your
              gardening expertise
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text194">
              Design the space, eliminate undesired plants, and establish
              optimal soil conditions for successful planting.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text195">
              Adhere to planting guidelines, provide sufficient water and
              sunlight, and monitor plant well-being.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text196">
              Consistently hydrate, trim, and nourish your plants to maintain a
              flourishing garden. Relax and relish the allure of your outdoor
              sanctuary.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text197">Outstanding Reputation</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              My knowledge has expanded significantly thanks to Heckyourgarden.
              The comprehensive plant manuals are a must-have for every
              gardening lover.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text199">
              Heckyourgarden has been instrumental in elevating my landscaping
              endeavors with their innovative concepts and motivation.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text200">
              Discovering Heckyourgarden opened my eyes to the joy of gardening.
              A definite must-visit!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text201">
              Heckyourgarden is the go-to hub for gardening enthusiasts. The
              abundance of advice and support has completely transformed my
              outdoor space.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text202">Terms of Use</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text203">Connect With Us Page</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text204">Alice Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text205">Natalie Moore</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text206">Michael Green</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text207">Professional Horticulturist</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text208">Garden Specialist</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text209">Landscape Architect</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text210">Gardening Expert</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text211">
              Explore a world of gardening tips, inspiration, and expert advice
              on plants, outdoor spaces, and landscaping at Heckyourgarden. Dive
              into plant care guides, landscaping ideas, and design plans to
              transform your outdoor space into a paradise. Access premium
              content and products with our membership plans.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text212">Categories</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text213">
              Immerse yourself in a realm of gardening knowledge, creativity,
              and professional guidance on plants, outdoor areas, and landscape
              design at Heckyourgarden. Delve into plant care manuals,
              landscaping concepts, and architectural blueprints to metamorphose
              your outdoor area into an enchanting garden. Unveil restricted
              content and merchandise with our subscription packages.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4></Footer4>
    </div>
  )
}

export default Home
