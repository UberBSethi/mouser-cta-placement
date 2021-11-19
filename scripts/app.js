{% if mouser_app_on == "true" %}
<script>
  const streamId = Hubs.appInstance.currentCollectionId.toString();
  window.obData.ctasToManipulate = [];
  const ctaList = [
  {streamId: streamId, ctaId: '{{ mouser_cta_id_a }}', newPos: {{ mouser_pos_a }}},
  {streamId: streamId, ctaId: '{{ mouser_cta_id_b }}', newPos: {{ mouser_pos_b }}},
  {streamId: streamId, ctaId: '{{ mouser_cta_id_c }}', newPos: {{ mouser_pos_c }}},
  {streamId: streamId, ctaId: '{{ mouser_cta_id_d }}', newPos: {{ mouser_pos_d }}},
  {streamId: streamId, ctaId: '{{ mouser_cta_id_e }}', newPos: {{ mouser_pos_e }}}
  ];
  ctaList.forEach((item) => {
    if(item.ctaId !== 'empty' && typeof item.ctaId === "string") {
    window.obData.ctasToManipulate.push(item);
    }
  });
</script>
{% endif %}
