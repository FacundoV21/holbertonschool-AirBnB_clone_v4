window.onload = () => {
  const list = {}
  $("input:checkbox").click(function() {
    if ($(this).is(":checked")) {
      list[$(this).attr("data-id")] = $(this).attr("data-name")
    } else { delete list[$(this).attr("data-id")] }
    $(" .amenities h4").text(Object.values(list).join(", "))
  })
}
