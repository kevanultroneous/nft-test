import styles from "@/styles/components/CountryPicker.module.css";
const CountryPicker = ({ selection, selected }) => {
  return (
    <select onChange={selection} className={styles.DropdownMenus}>
      <option value="-None-" selected={selected}>
        - Select Country -
      </option>
      <option value="India">India</option>
      <option value="United&#x20;States">United States</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Brazil">Brazil</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Russia">Russia</option>
      <option value="Japan">Japan</option>
      <option value="Mexico">Mexico</option>
      <option value="Philippines">Philippines</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Egypt">Egypt</option>
      <option value="Germany">Germany</option>
      <option value="Iran">Iran</option>
      <option value="Turkey">Turkey</option>
      <option value="Democratic&#x20;Republic&#x20;of&#x20;the&#x20;Congo">
        Democratic Republic of the Congo
      </option>
      <option value="Thailand">Thailand</option>
      <option value="France">France</option>
      <option value="United&#x20;Kingdom">United Kingdom</option>
      <option value="Italy">Italy</option>
      <option value="Burma">Burma</option>
      <option value="South&#x20;Africa">South Africa</option>
      <option value="South&#x20;Korea">South Korea</option>
      <option value="Colombia">Colombia</option>
      <option value="Spain">Spain</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Kenya">Kenya</option>
      <option value="Argentina">Argentina</option>
      <option value="Algeria">Algeria</option>
      <option value="Poland">Poland</option>
      <option value="Sudan">Sudan</option>
      <option value="Uganda">Uganda</option>
      <option value="Canada">Canada</option>
      <option value="Iraq">Iraq</option>
      <option value="Morocco">Morocco</option>
      <option value="Peru">Peru</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Saudi&#x20;Arabia">Saudi Arabia</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Nepal">Nepal</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Yemen">Yemen</option>
      <option value="North&#x20;Korea">North Korea</option>
      <option value="Ghana">Ghana</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Australia">Australia</option>
      <option value="Ivory&#x20;Coast">Ivory Coast</option>
      <option value="Syria">Syria</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Angola">Angola</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Sri&#x20;Lanka">Sri Lanka</option>
      <option value="Romania">Romania</option>
      <option value="Burkina&#x20;Faso">Burkina Faso</option>
      <option value="Niger">Niger</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Netherlands">Netherlands</option>
      <option value="Chile">Chile</option>
      <option value="Malawi">Malawi</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Mali">Mali</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Senegal">Senegal</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="Chad">Chad</option>
      <option value="South&#x20;Sudan">South Sudan</option>
      <option value="Belgium">Belgium</option>
      <option value="Cuba">Cuba</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Guinea">Guinea</option>
      <option value="Greece">Greece</option>
      <option value="Portugal">Portugal</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Czech&#x20;Republic">Czech Republic</option>
      <option value="Somalia">Somalia</option>
      <option value="Haiti">Haiti</option>
      <option value="Benin">Benin</option>
      <option value="Burundi">Burundi</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Hungary">Hungary</option>
      <option value="Sweden">Sweden</option>
      <option value="Belarus">Belarus</option>
      <option value="Dominican&#x20;Republic">Dominican Republic</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Honduras">Honduras</option>
      <option value="Austria">Austria</option>
      <option value="United&#x20;Arab&#x20;Emirates">
        United Arab Emirates
      </option>
      <option value="Israel">Israel</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Hong&#x20;Kong&#x20;&#x28;China&#x29;">
        Hong Kong &#x28;China&#x29;
      </option>
      <option value="Serbia">Serbia</option>
      <option value="Papua&#x20;New&#x20;Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Laos">Laos</option>
      <option value="Jordan">Jordan</option>
      <option value="El&#x20;Salvador">El Salvador</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Libya">Libya</option>
      <option value="Togo">Togo</option>
      <option value="Sierra&#x20;Leone">Sierra Leone</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Denmark">Denmark</option>
      <option value="Finland">Finland</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Singapore">Singapore</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Norway">Norway</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Costa&#x20;Rica">Costa Rica</option>
      <option value="Central&#x20;African&#x20;Republic">
        Central African Republic
      </option>
      <option value="Ireland">Ireland</option>
      <option value="Georgia">Georgia</option>
      <option value="New&#x20;Zealand">New Zealand</option>
      <option value="Republic&#x20;of&#x20;the&#x20;Congo">
        Republic of the Congo
      </option>
      <option value="Palestine">Palestine</option>
      <option value="Liberia">Liberia</option>
      <option value="Croatia">Croatia</option>
      <option value="Oman">Oman</option>
      <option value="Bosnia&#x20;and&#x20;Herzegovina">
        Bosnia and Herzegovina
      </option>
      <option value="Puerto&#x20;Rico">Puerto Rico</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Moldov">Moldov</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Panama">Panama</option>
      <option value="Uruguay">Uruguay</option>
      <option value="Armenia">Armenia</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Albania">Albania</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Namibia">Namibia</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Qatar">Qatar</option>
      <option value="Macedonia">Macedonia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Botswana">Botswana</option>
      <option value="Latvia">Latvia</option>
      <option value="Gambia">Gambia</option>
      <option value="Kosovo">Kosovo</option>
      <option value="Guinea-Bissau">Guinea-Bissau</option>
      <option value="Gabon">Gabon</option>
      <option value="Equatorial&#x20;Guinea">Equatorial Guinea</option>
      <option value="Trinidad&#x20;and&#x20;Tobago">Trinidad and Tobago</option>
      <option value="Estonia">Estonia</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Swaziland">Swaziland</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Timor-Leste">Timor-Leste</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Fiji">Fiji</option>
      <option value="Reunion&#x20;&#x28;France&#x29;">
        Reunion &#x28;France&#x29;
      </option>
      <option value="Guyana">Guyana</option>
      <option value="Comoros">Comoros</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Montenegro">Montenegro</option>
      <option value="Macau&#x20;&#x28;China&#x29;">
        Macau &#x28;China&#x29;
      </option>
      <option value="Solomon&#x20;Islands">Solomon Islands</option>
      <option value="Western&#x20;Sahara">Western Sahara</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Suriname">Suriname</option>
      <option value="Cape&#x20;Verde">Cape Verde</option>
      <option value="Malta">Malta</option>
      <option value="Guadeloupe&#x20;&#x28;France&#x29;">
        Guadeloupe &#x28;France&#x29;
      </option>
      <option value="Martinique&#x20;&#x28;France&#x29;">
        Martinique &#x28;France&#x29;
      </option>
      <option value="Brunei">Brunei</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Iceland">Iceland</option>
      <option value="Maldives">Maldives</option>
      <option value="Belize">Belize</option>
      <option value="Barbados">Barbados</option>
      <option value="French&#x20;Polynesia&#x20;&#x28;France&#x29;">
        French Polynesia &#x28;France&#x29;
      </option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="New&#x20;Caledonia&#x20;&#x28;France&#x29;">
        New Caledonia &#x28;France&#x29;
      </option>
      <option value="French&#x20;Guiana&#x20;&#x28;France&#x29;">
        French Guiana &#x28;France&#x29;
      </option>
      <option value="Mayotte&#x20;&#x28;France&#x29;">
        Mayotte &#x28;France&#x29;
      </option>
      <option value="Samoa">Samoa</option>
      <option value="Sao&#x20;Tom&#x20;and&#x20;Principe">
        Sao Tom and Principe
      </option>
      <option value="Saint&#x20;Lucia">Saint Lucia</option>
      <option value="Guam&#x20;&#x28;USA&#x29;">Guam &#x28;USA&#x29;</option>
      <option value="Curacao&#x20;&#x28;Netherlands&#x29;">
        Curacao &#x28;Netherlands&#x29;
      </option>
      <option value="Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines">
        Saint Vincent and the Grenadines
      </option>
      <option value="Kiribati">Kiribati</option>
      <option value="United&#x20;States&#x20;Virgin&#x20;Islands&#x20;&#x28;USA&#x29;">
        United States Virgin Islands &#x28;USA&#x29;
      </option>
      <option value="Grenada">Grenada</option>
      <option value="Tonga">Tonga</option>
      <option value="Aruba&#x20;&#x28;Netherlands&#x29;">
        Aruba &#x28;Netherlands&#x29;
      </option>
      <option value="Federated&#x20;States&#x20;of&#x20;Micronesia">
        Federated States of Micronesia
      </option>
      <option value="Jersey&#x20;&#x28;UK&#x29;">Jersey &#x28;UK&#x29;</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Antigua&#x20;and&#x20;Barbuda">Antigua and Barbuda</option>
      <option value="Isle&#x20;of&#x20;Man&#x20;&#x28;UK&#x29;">
        Isle of Man &#x28;UK&#x29;
      </option>
      <option value="Andorra">Andorra</option>
      <option value="Dominica">Dominica</option>
      <option value="Bermuda&#x20;&#x28;UK&#x29;">
        Bermuda &#x28;UK&#x29;
      </option>
      <option value="Guernsey&#x20;&#x28;UK&#x29;">
        Guernsey &#x28;UK&#x29;
      </option>
      <option value="Greenland&#x20;&#x28;Denmark&#x29;">
        Greenland &#x28;Denmark&#x29;
      </option>
      <option value="Marshall&#x20;Islands">Marshall Islands</option>
      <option value="American&#x20;Samoa&#x20;&#x28;USA&#x29;">
        American Samoa &#x28;USA&#x29;
      </option>
      <option value="Cayman&#x20;Islands&#x20;&#x28;UK&#x29;">
        Cayman Islands &#x28;UK&#x29;
      </option>
      <option value="Saint&#x20;Kitts&#x20;and&#x20;Nevis">
        Saint Kitts and Nevis
      </option>
      <option value="Northern&#x20;Mariana&#x20;Islands&#x20;&#x28;USA&#x29;">
        Northern Mariana Islands &#x28;USA&#x29;
      </option>
      <option value="Faroe&#x20;Islands&#x20;&#x28;Denmark&#x29;">
        Faroe Islands &#x28;Denmark&#x29;
      </option>
      <option value="Sint&#x20;Maarten&#x20;&#x28;Netherlands&#x29;">
        Sint Maarten &#x28;Netherlands&#x29;
      </option>
      <option value="Saint&#x20;Martin&#x20;&#x28;France&#x29;">
        Saint Martin &#x28;France&#x29;
      </option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Monaco">Monaco</option>
      <option value="San&#x20;Marino">San Marino</option>
      <option value="Turks&#x20;and&#x20;Caicos&#x20;Islands&#x20;&#x28;UK&#x29;">
        Turks and Caicos Islands &#x28;UK&#x29;
      </option>
      <option value="Gibraltar&#x20;&#x28;UK&#x29;">
        Gibraltar &#x28;UK&#x29;
      </option>
      <option value="British&#x20;Virgin&#x20;Islands&#x20;&#x28;UK&#x29;">
        British Virgin Islands &#x28;UK&#x29;
      </option>
      <option value="Aland&#x20;Islands&#x20;&#x28;Finland&#x29;">
        Aland Islands &#x28;Finland&#x29;
      </option>
      <option value="Caribbean&#x20;Netherlands&#x20;&#x28;Netherlands&#x29;">
        Caribbean Netherlands &#x28;Netherlands&#x29;
      </option>
      <option value="Palau">Palau</option>
      <option value="Cook&#x20;Islands&#x20;&#x28;NZ&#x29;">
        Cook Islands &#x28;NZ&#x29;
      </option>
      <option value="Anguilla&#x20;&#x28;UK&#x29;">
        Anguilla &#x28;UK&#x29;
      </option>
      <option value="Wallis&#x20;and&#x20;Futuna&#x20;&#x28;France&#x29;">
        Wallis and Futuna &#x28;France&#x29;
      </option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Nauru">Nauru</option>
      <option value="Saint&#x20;Barthelemy&#x20;&#x28;France&#x29;">
        Saint Barthelemy &#x28;France&#x29;
      </option>
      <option value="Saint&#x20;Pierre&#x20;and&#x20;Miquelon&#x20;&#x28;France&#x29;">
        Saint Pierre and Miquelon &#x28;France&#x29;
      </option>
      <option value="Montserrat&#x20;&#x28;UK&#x29;">
        Montserrat &#x28;UK&#x29;
      </option>
      <option value="Saint&#x20;Helena,&#x20;Ascension&#x20;and&#x20;Tristan&#x20;da&#x20;Cunha&#x20;&#x28;UK&#x29;">
        Saint Helena, Ascension and Tristan da Cunha &#x28;UK&#x29;
      </option>
      <option value="Svalbard&#x20;and&#x20;Jan&#x20;Mayen&#x20;&#x28;Norway&#x29;">
        Svalbard and Jan Mayen &#x28;Norway&#x29;
      </option>
      <option value="Falkland&#x20;Islands&#x20;&#x28;UK&#x29;">
        Falkland Islands &#x28;UK&#x29;
      </option>
      <option value="Norfolk&#x20;Island&#x20;&#x28;Australia&#x29;">
        Norfolk Island &#x28;Australia&#x29;
      </option>
      <option value="Christmas&#x20;Island&#x20;&#x28;Australia&#x29;">
        Christmas Island &#x28;Australia&#x29;
      </option>
      <option value="Niue&#x20;&#x28;NZ&#x29;">Niue &#x28;NZ&#x29;</option>
      <option value="Tokelau&#x20;&#x28;NZ&#x29;">
        Tokelau &#x28;NZ&#x29;
      </option>
      <option value="Vatican&#x20;City">Vatican City</option>
      <option value="Cocos&#x20;&#x28;Keeling&#x29;&#x20;Islands&#x20;&#x28;Australia&#x29;">
        Cocos &#x28;Keeling&#x29; Islands &#x28;Australia&#x29;
      </option>
      <option value="Pitcairn&#x20;Islands&#x20;&#x28;UK&#x29;">
        Pitcairn Islands &#x28;UK&#x29;
      </option>
    </select>
  );
};
export default CountryPicker;
