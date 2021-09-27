window.updatedABMstreams2020 = window.updatedABMstreams2020 || [];
window.streamInfo2020 = window.streamInfo2020 || {};       
const on = {{stream_app_on}};
window.streamAppOn = on;
const stream_id = Hubs.appInstance.currentCollectionId;
if(on === true) {
  window.updatedABMstreams2020 = [stream_id];
  const csc = [
    {streamId: {{csc_stream_a}}, tabTitle: '{{csc_tab_title_a}}'},
    {streamId: {{csc_stream_b}}, tabTitle: '{{csc_tab_title_b}}'},
    {streamId: {{csc_stream_c}}, tabTitle: '{{csc_tab_title_c}}'},
    {streamId: {{csc_stream_d}}, tabTitle: '{{csc_tab_title_d}}'},
    {streamId: {{csc_stream_e}}, tabTitle: '{{csc_tab_title_e}}'}
  ];
    
  window.streamInfo2020 = {
    [stream_id]: {
    templateType: "{{template_type}}", 
    industry: "{{industry}}", 
    topHeading: "{{top_heading}}", 
    bottomHeading: "{{bottom_heading}}", 
    subHeading: "{{sub_heading}}.", 
    salesRepId: "{{sales_rep_id}}", 
    showDataBlocks: {{show_data_blocks}}, 
    eventsHeadline: "{{events_headline}}", 
    companySpecificContent: [],
    companyContentTileAmount: {{company_content_tile_amount}}, 
    midPageAdPlacement: {{mid_page_ad_placement}},
    quoteSectionTitle: "{{quote_section_title}}"

    }
  };
  let note = "{{s_rep_pm}}";
  
  if(note !== 'empty'){
    window.salesRepInfo["{{sales_rep_id}}"].repPersonalNote[stream_id] = note;
  }
  csc.forEach((item) => {
    if(item.streamId !== 'empty' && typeof item.streamId === "number") {
      window.streamInfo2020[stream_id].companySpecificContent.push(item);
    }
  });
};




"Advertising, Media & Entertainment"
"Energy"
"Federal"
"Financial Services"
"Food"
"Healthcare"
"Hotel"
"Life Sciences"
"Manufacturing"
"Media"
"Retail & CPG"
"State and Local Government"
"Technology"
"Warehouse"