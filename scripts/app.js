{% if mouser_app_on == "true" %}
<script>
  const streamId = Hubs.appInstance.currentCollectionId.toString();
  window.obData.ctasToManipulate = [];
  const ctaList = [
  {streamId: streamId, ctaId: "{{ mouser_cta_id_a }}", newPos: {{ mouser_pos_a | default: 0 }}},
  {streamId: streamId, ctaId: "{{ mouser_cta_id_b }}", newPos: {{ mouser_pos_b | default: 0 }}},
  {streamId: streamId, ctaId: "{{ mouser_cta_id_c }}", newPos: {{ mouser_pos_c | default: 0 }}},
  {streamId: streamId, ctaId: "{{ mouser_cta_id_d }}", newPos: {{ mouser_pos_d | default: 0 }}},
  {streamId: streamId, ctaId: "{{ mouser_cta_id_e }}", newPos: {{ mouser_pos_e | default: 0 }}}
  ];
  ctaList.forEach((item) => {
    if(item.ctaId !== 'empty' && typeof item.ctaId === "string") {
    window.obData.ctasToManipulate.push(item);
    }
  });
</script>
{% endif %}
