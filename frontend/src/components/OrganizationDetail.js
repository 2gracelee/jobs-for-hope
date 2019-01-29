import React from 'react';
import './OrganizationDetail.scss';


const OrganizationDetail = (props, userJobTitle, onSearchChange, onZipSearchChange) => (

  <div>
    <section role="search" className="slim-search-container">
      <form className="search">
        <div className="slim-keyword-search">
            <input type="search" className="slim-search-input" name="keywords" placeholder="Housing / Homeless Jobs" onChange={onSearchChange} />
        </div>
        <div className="slim-location-search">
            <input type="search" className="slim-location-input" name="location" placeholder="City or ZIP" onChange={onZipSearchChange} />
        </div>
        <div className="slim-search-btn-container">
          <button
            type="button" className="slim-search-btn"
            onClick={userJobTitle}>Search</button>
        </div>
      </form>
    </section>

    <div className="organization-detail-container">
      <div className="back-to-organization-link-wrapper">
        <a href="javascript:history.back()" className="back-to-organization-link"><h4>&nbsp; &lt; &nbsp; &nbsp; Back To Organizations</h4></a>
      </div>

      <div className="organization-detail-card">
        <div className="organization-detail-card-content">
          
          <div className="org-logo">
            <img id="org-img-detail-page" alt="company logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEXuNCX////tHwD97OruLh3xZl3uLBrzenT829nuMSHvRTjtDgDtIw3++fnuKBPvPS7zgnz+8/L95uXsAAD2paDydG3zfnf4tbH60M7zh4H3sKzycGnwTkP1l5LxYln2qaT5wr/0kIr71tTwVUrwXFLvQzb2npn6yMa7ZmYLAAADEElEQVR4nO3c7VLiMBSAYRprpSQtFET5UEFc3fu/w8VhxzJyaJOBmqS+z+9Opq9zaGkEBgMAAAAAAAAAAAAAAAAAAAAAAAAAAADgVKYy36fQqVzPp6869X0a3THviyRJpn9U7vtMupGp++Rgm5a+T6YDuVpXyZdX1btRNeNFcqxvo1oPaG07ML5P62pyvb45Cdx71j25cxyuoJKb2z6MqjSgtb/j2Ed1f4sXB7T2EfebnPMDejSq63hHtXlAa4tIR3U/oFV73cF9jKP6/RbfMqpzHdmoZsZuQGu7J+X7pB3sb/HWA1rbxDOqZuQyoLXqIY5HR9srqGQ/qsG/HF2uoJJVGfijo80tvlkxCfnRMVObC/s+Dd9CHdVLB7T2GOYuh9stvlmxDO+q6n6LbxbaLsf1BrS2zQIaVZdbfGHfGMzesdMt/kNN7BunL0GMauYwoJ+bFmX2aP8H2Y4DSFTWgf+f5nP1NrROfAjg3bhq2Yj5Uj/mpnppO6p38RQu3o+3KkpjOarRFFbfn+FtRzWWwo2wu51qm6tqHIW7kbxBUZbtoxpDYXV3dpMpV09toxpB4cY0nWPa9gYg+ML2HbSyXEVcaLW11DyqYReuSrvTa7qqhlw4dNg3y8y5UQ248Nnt0Uc9yW9vAy58cXy20/KLMeDCW8dCRaE/FNouQ6E/FNouQ6E/FNouQ6E/FNouQ6E/FNouQ6E/FNouQ6E/FNouQ6E/FNouQ6E/Pgozkbywy7HhFC4nEvFfXbl46HIcdGE+Fg9NxM8ylvKxI4dPk4VeKP/zlUIKKaSQQgoppJBCCimkkEIKKaSQQgoppLDXhcJZ534KS3NqJhfO1emhKhUPLbSwrNE+Cq2/OdyhjgunP5wjoJDChELvKKQwodA7CilMKPSOwgsLr/7bbu46fgJW+tRsJy6zngnHKvHQQjpUz3q1iyGt2699GgoppJBCCimkkEIKKaSQQgoppJDCX11oppWgcP3tyzObqNKvzv/0NyzFT8cY0+Uv/p9ZW/6WrNMS3colDode4VgAAAAAAACE4R9U3GY2mtEy/wAAAABJRU5ErkJggg==" />
            <h3 id="org-title-detail-page">Alliance for Housing and Healing</h3>
            {/* <h3 id="org-title">{org.gsx$name.$t}</h3> */}
          </div>

          <div className="org-mission-statement">
            <div className="title-wrapper"> 
              <h4 className="org-detail-title odt-lg">Mission Statement</h4>
            </div>
              <span className="org-detail-text">Alliance for Housing and Healing is an Equal Opportunity Employer and will not discriminate against any employee or applicant on the basis of age, color, disability, medical condition, pregnancy or pregnancy-related condition, gender, national origin, race, religion, sexual orientation, gender identity, political affiliation or opinion, veteran status, or any classification protected by federal, state, or local law.</span>
          </div>
        
          <div className="org-detail-location-web-wrapper">
            <div className="org-detail-sub-container">
              <div className="title-wrapper"> 
                <h4 className="org-detail-title odt-sm">Location</h4>
              </div>
              <a href="" className="org-detail-text odt-link">825 Colorado Blvd. Suite 100 Los Angeles, CA 90041</a>
            </div>

            <div className="website-container">
              <div className="title-wrapper"> 
                <h4 className="org-detail-title odt-sm">Website</h4>
              </div>
              <a href="" className="org-detail-text odt-link">https://alliancehh.org/</a>
            </div>
          </div>
        
          <div className="description-wrapper">
              <div className="title-wrapper"> 
                <h4 className="org-detail-title odt-md">Description</h4>
              </div>
              <span className="org-detail-text"> 
                The current charitable program include:

                Our weekly Food Pantry program which distributes free nutritious food to more than 3,000 homeless and low income youth and adults.
              </span>
          </div>

        </div>
      </div>
        
    </div>
  </div>






);

export default OrganizationDetail;