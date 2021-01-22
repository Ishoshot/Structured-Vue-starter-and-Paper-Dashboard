import Vue from 'vue'

/* -------------------------------------------------------------------------- */
/*                     Filters file  **use Vue.filter()                       */
/* -------------------------------------------------------------------------- */
/**
 * Format date
 * @para - String date
 * @return -format Sat, 7 Nov 2020
 */
Vue.filter('formatDate', function (date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  let posted_on = new Date(date)
  let formatted_date =
    days[posted_on.getDay()] +
    ', ' +
    posted_on.getDate() +
    ' ' +
    months[posted_on.getMonth()] +
    ' ' +
    posted_on.getFullYear()

  return formatted_date
})

/**
 * Split name by space " "
 * @param - name
 * @return -splited name[0]
 */
Vue.filter('splitName', function (name) {
  return name.replace(/ .*/, '')
})

/**
 *  Truncates long strings if the strlen is greater than limit passed
 * @param value - string to be truncated
 * @param limit - preffered string lenght
 * @return value
 */
Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
    value = value.substring(0, limit - 3) + '...'
  }

  return value
})
