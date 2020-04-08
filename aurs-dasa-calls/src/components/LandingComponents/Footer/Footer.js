import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

 <footer class="site-footer">
     <div className = "container">
     <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About FYP</h6>
            <p class="text-justify"> AUSR - DASA<i> Automatic Urdu Speech Recognition</i>
             Analyze Your Urdu Audio Calls, listen to them, convert the urdu calls into text,
             derive sentiments of your customers, find out the most occuring words spoken 
             by the customers, find out what problems your customers are facing without
             listening to the calls manually.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 style = {{marginLeft : '19%'}}> Our Products</h6>
            <ul class="footer-links">
              <li><a href="/dashboard/speech/live">Speech to Text</a></li>
              <li><a href="/dashboard/sentiment/live">Sentiment Analysis</a></li>
              <li><a href="/dashboard/analytics/freq">Data Analytics</a></li>
              <li><a href="/dashboard/analytics/problem/live">Problem Live</a></li>
            </ul>
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6 style = {{marginLeft : '19%'}}>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div> */}
        </div>
     </div>
 </footer>

    )
}

export default Footer;