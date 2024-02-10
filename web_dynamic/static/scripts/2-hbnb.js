window.onload = () => {
  const list = {}
  $("input:checkbox").click(function() {
    if ($(this).is(":checked")) {
      list[$(this).attr("data-id")] = $(this).attr("data-name")
    } else { delete list[$(this).attr("data-id")] }

    $(" .amenities h4").text(Object.values(list).join(", "))
  })
  $.ajax({
    url: 'http://localhost:5001/api/v1/status',
    method: 'GET',
    success: function(data) {
      if (data.status === 'OK') {
        $("div#api_status").addClass('available')
      } else { $("div#api_status").classList.remove('available') }
    }
  })
}
