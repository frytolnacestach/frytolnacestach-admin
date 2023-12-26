<template>
    <div>
        <select class="m-select" v-model="timeZoneName" @change="changeTimeZone">
            <option v-for="timeZone in timeZones" :value="timeZone" :key="timeZone">
                {{ timeZone }}
            </option>
        </select>
        <input class="a-input" v-model="dateTimeNew" type="datetime-local" @input="changeDateTime" />
        <span>Date: {{ dateNew }}</span>
    </div>
</template>

<script lang="ts">
    import { DateTime, FixedOffsetZone, luxon } from 'luxon'

    export default defineComponent({
        name: 'MoleculesmInputTimestamptzComponent',

        props: {
            value: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                date: ''
            }
        },

        setup(props) {
            const timeZones = [
                'Europe/Andorra',
                'Asia/Dubai',
                'Asia/Kabul',
                'Europe/Tirane',
                'Asia/Yerevan',
                'Antarctica/Casey',
                'Antarctica/Davis',
                'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
                'Antarctica/Mawson',
                'Antarctica/Palmer',
                'Antarctica/Rothera',
                'Antarctica/Syowa',
                'Antarctica/Troll',
                'Antarctica/Vostok',
                'America/Argentina/Buenos_Aires',
                'America/Argentina/Cordoba',
                'America/Argentina/Salta',
                'America/Argentina/Jujuy',
                'America/Argentina/Tucuman',
                'America/Argentina/Catamarca',
                'America/Argentina/La_Rioja',
                'America/Argentina/San_Juan',
                'America/Argentina/Mendoza',
                'America/Argentina/San_Luis',
                'America/Argentina/Rio_Gallegos',
                'America/Argentina/Ushuaia',
                'Pacific/Pago_Pago',
                'Europe/Vienna',
                'Australia/Lord_Howe',
                'Antarctica/Macquarie',
                'Australia/Hobart',
                'Australia/Currie',
                'Australia/Melbourne',
                'Australia/Sydney',
                'Australia/Broken_Hill',
                'Australia/Brisbane',
                'Australia/Lindeman',
                'Australia/Adelaide',
                'Australia/Darwin',
                'Australia/Perth',
                'Australia/Eucla',
                'Asia/Baku',
                'America/Barbados',
                'Asia/Dhaka',
                'Europe/Brussels',
                'Europe/Sofia',
                'Atlantic/Bermuda',
                'Asia/Brunei',
                'America/La_Paz',
                'America/Noronha',
                'America/Belem',
                'America/Fortaleza',
                'America/Recife',
                'America/Araguaina',
                'America/Maceio',
                'America/Bahia',
                'America/Sao_Paulo',
                'America/Campo_Grande',
                'America/Cuiaba',
                'America/Santarem',
                'America/Porto_Velho',
                'America/Boa_Vista',
                'America/Manaus',
                'America/Eirunepe',
                'America/Rio_Branco',
                'America/Nassau',
                'Asia/Thimphu',
                'Europe/Minsk',
                'America/Belize',
                'America/St_Johns',
                'America/Halifax',
                'America/Glace_Bay',
                'America/Moncton',
                'America/Goose_Bay',
                'America/Blanc-Sablon',
                'America/Toronto',
                'America/Nipigon',
                'America/Thunder_Bay',
                'America/Iqaluit',
                'America/Pangnirtung',
                'America/Atikokan',
                'America/Winnipeg',
                'America/Rainy_River',
                'America/Resolute',
                'America/Rankin_Inlet',
                'America/Regina',
                'America/Swift_Current',
                'America/Edmonton',
                'America/Cambridge_Bay',
                'America/Yellowknife',
                'America/Inuvik',
                'America/Creston',
                'America/Dawson_Creek',
                'America/Fort_Nelson',
                'America/Vancouver',
                'America/Whitehorse',
                'America/Dawson',
                'Indian/Cocos',
                'Europe/Zurich',
                'Africa/Abidjan',
                'Pacific/Rarotonga',
                'America/Santiago',
                'America/Punta_Arenas',
                'Pacific/Easter',
                'Asia/Shanghai',
                'Asia/Urumqi',
                'America/Bogota',
                'America/Costa_Rica',
                'America/Havana',
                'Atlantic/Cape_Verde',
                'America/Curacao',
                'Indian/Christmas',
                'Asia/Nicosia',
                'Asia/Famagusta',
                'Europe/Prague',
                'Europe/Berlin',
                'Europe/Copenhagen',
                'America/Santo_Domingo',
                'Africa/Algiers',
                'America/Guayaquil',
                'Pacific/Galapagos',
                'Europe/Tallinn',
                'Africa/Cairo',
                'Africa/El_Aaiun',
                'Europe/Madrid',
                'Africa/Ceuta',
                'Atlantic/Canary',
                'Europe/Helsinki',
                'Pacific/Fiji',
                'Atlantic/Stanley',
                'Pacific/Chuuk',
                'Pacific/Pohnpei',
                'Pacific/Kosrae',
                'Atlantic/Faroe',
                'Europe/Paris',
                'Europe/London',
                'Asia/Tbilisi',
                'America/Cayenne',
                'Africa/Accra',
                'Europe/Gibraltar',
                'America/Godthab',
                'America/Danmarkshavn',
                'America/Scoresbysund',
                'America/Thule',
                'Europe/Athens',
                'Atlantic/South_Georgia',
                'America/Guatemala',
                'Pacific/Guam',
                'Africa/Bissau',
                'America/Guyana',
                'Asia/Hong_Kong',
                'America/Tegucigalpa',
                'America/Port-au-Prince',
                'Europe/Budapest',
                'Asia/Jakarta',
                'Asia/Pontianak',
                'Asia/Makassar',
                'Asia/Jayapura',
                'Europe/Dublin',
                'Asia/Jerusalem',
                'Asia/Kolkata',
                'Indian/Chagos',
                'Asia/Baghdad',
                'Asia/Tehran',
                'Atlantic/Reykjavik',
                'Europe/Rome',
                'America/Jamaica',
                'Asia/Amman',
                'Asia/Tokyo',
                'Africa/Nairobi',
                'Asia/Bishkek',
                'Pacific/Tarawa',
                'Pacific/Enderbury',
                'Pacific/Kiritimati',
                'Asia/Pyongyang',
                'Asia/Seoul',
                'Asia/Almaty',
                'Asia/Qyzylorda',
                'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
                'Asia/Aqtobe',
                'Asia/Aqtau',
                'Asia/Atyrau',
                'Asia/Oral',
                'Asia/Beirut',
                'Asia/Colombo',
                'Africa/Monrovia',
                'Europe/Vilnius',
                'Europe/Luxembourg',
                'Europe/Riga',
                'Africa/Tripoli',
                'Africa/Casablanca',
                'Europe/Monaco',
                'Europe/Chisinau',
                'Pacific/Majuro',
                'Pacific/Kwajalein',
                'Asia/Yangon',
                'Asia/Ulaanbaatar',
                'Asia/Hovd',
                'Asia/Choibalsan',
                'Asia/Macau',
                'America/Martinique',
                'Europe/Malta',
                'Indian/Mauritius',
                'Indian/Maldives',
                'America/Mexico_City',
                'America/Cancun',
                'America/Merida',
                'America/Monterrey',
                'America/Matamoros',
                'America/Mazatlan',
                'America/Chihuahua',
                'America/Ojinaga',
                'America/Hermosillo',
                'America/Tijuana',
                'America/Bahia_Banderas',
                'Asia/Kuala_Lumpur',
                'Asia/Kuching',
                'Africa/Maputo',
                'Africa/Windhoek',
                'Pacific/Noumea',
                'Pacific/Norfolk',
                'Africa/Lagos',
                'America/Managua',
                'Europe/Amsterdam',
                'Europe/Oslo',
                'Asia/Kathmandu',
                'Pacific/Nauru',
                'Pacific/Niue',
                'Pacific/Auckland',
                'Pacific/Chatham',
                'America/Panama',
                'America/Lima',
                'Pacific/Tahiti',
                'Pacific/Marquesas',
                'Pacific/Gambier',
                'Pacific/Port_Moresby',
                'Pacific/Bougainville',
                'Asia/Manila',
                'Asia/Karachi',
                'Europe/Warsaw',
                'America/Miquelon',
                'Pacific/Pitcairn',
                'America/Puerto_Rico',
                'Asia/Gaza',
                'Asia/Hebron',
                'Europe/Lisbon',
                'Atlantic/Madeira',
                'Atlantic/Azores',
                'Pacific/Palau',
                'America/Asuncion',
                'Asia/Qatar',
                'Indian/Reunion',
                'Europe/Bucharest',
                'Europe/Belgrade',
                'Europe/Kaliningrad',
                'Europe/Moscow',
                'Europe/Simferopol',
                'Europe/Kirov',
                'Europe/Astrakhan',
                'Europe/Volgograd',
                'Europe/Saratov',
                'Europe/Ulyanovsk',
                'Europe/Samara',
                'Asia/Yekaterinburg',
                'Asia/Omsk',
                'Asia/Novosibirsk',
                'Asia/Barnaul',
                'Asia/Tomsk',
                'Asia/Novokuznetsk',
                'Asia/Krasnoyarsk',
                'Asia/Irkutsk',
                'Asia/Chita',
                'Asia/Yakutsk',
                'Asia/Khandyga',
                'Asia/Vladivostok',
                'Asia/Ust-Nera',
                'Asia/Magadan',
                'Asia/Sakhalin',
                'Asia/Srednekolymsk',
                'Asia/Kamchatka',
                'Asia/Anadyr',
                'Asia/Riyadh',
                'Pacific/Guadalcanal',
                'Indian/Mahe',
                'Africa/Khartoum',
                'Europe/Stockholm',
                'Asia/Singapore',
                'America/Paramaribo',
                'Africa/Juba',
                'Africa/Sao_Tome',
                'America/El_Salvador',
                'Asia/Damascus',
                'America/Grand_Turk',
                'Africa/Ndjamena',
                'Indian/Kerguelen',
                'Asia/Bangkok',
                'Asia/Dushanbe',
                'Pacific/Fakaofo',
                'Asia/Dili',
                'Asia/Ashgabat',
                'Africa/Tunis',
                'Pacific/Tongatapu',
                'Europe/Istanbul',
                'America/Port_of_Spain',
                'Pacific/Funafuti',
                'Asia/Taipei',
                'Europe/Kiev',
                'Europe/Uzhgorod',
                'Europe/Zaporozhye',
                'Pacific/Wake',
                'America/New_York',
                'America/Detroit',
                'America/Kentucky/Louisville',
                'America/Kentucky/Monticello',
                'America/Indiana/Indianapolis',
                'America/Indiana/Vincennes',
                'America/Indiana/Winamac',
                'America/Indiana/Marengo',
                'America/Indiana/Petersburg',
                'America/Indiana/Vevay',
                'America/Chicago',
                'America/Indiana/Tell_City',
                'America/Indiana/Knox',
                'America/Menominee',
                'America/North_Dakota/Center',
                'America/North_Dakota/New_Salem',
                'America/North_Dakota/Beulah',
                'America/Denver',
                'America/Boise',
                'America/Phoenix',
                'America/Los_Angeles',
                'America/Anchorage',
                'America/Juneau',
                'America/Sitka',
                'America/Metlakatla',
                'America/Yakutat',
                'America/Nome',
                'America/Adak',
                'Pacific/Honolulu',
                'America/Montevideo',
                'Asia/Samarkand',
                'Asia/Tashkent',
                'America/Caracas',
                'Asia/Ho_Chi_Minh',
                'Pacific/Efate',
                'Pacific/Wallis',
                'Pacific/Apia',
                'Africa/Johannesburg'
            ]

            const date = ref(props.value) // format: 2022-10-28T11:20:41+00:00
            const dateNew = ref(props.value) // format: 2022-10-28T11:20:41+00:00

            const dateTime = ref('') // format: 2022-10-28T11:20:41
            const timeZone = ref('') // format: +00:00
            
            const dateTimeNew = ref('')
            const timeZoneNew = ref('')

            const timeZoneName = ref('')

            const changeTimeZone = () => {
                transformDateTime()
            };

            const changeDateTime = () => {
                transformDateTime()
            };

            onMounted(() => {
                // Separate dataNew
                const timeZoneRegex = /([+-]\d{2}:\d{2})$/;
                const [datePart, timeZonePart] = date.value.split(timeZoneRegex);

                // Set variable for dateTime and timeZone
                dateTime.value = datePart.trim()
                timeZone.value = `${timeZonePart.trim()}`

                // Actual TimeZone from browser
                const browserTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone

                // Set timeZoneName
                timeZoneName.value = timeZones.find(timeZone => timeZone.value === DateTime.local().setZone(timeZone).offsetNameShort) || browserTimeZone

                // Time zone code
                const offsetMinutes = DateTime.fromISO(dateTime.value).setZone(timeZoneName.value).offset;
                const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
                const offsetMinutesRemainder = Math.abs(offsetMinutes) % 60;
                const timeZoneNew = (offsetMinutes < 0 ? '-' : '+') + (offsetHours < 10 ? '0' : '') + offsetHours + ':' + (offsetMinutesRemainder < 10 ? '0' : '') + offsetMinutesRemainder
                
                const dateTimeWithZone = computed(() => {
                    if (dateTime.value && timeZone.value) {
                        const dateTimeObj = DateTime.fromISO(dateTime.value, { zone: 'utc' })
                        const dateTimeWithZoneObj = dateTimeObj.setZone(timeZoneNew)
                        return dateTimeWithZoneObj.toFormat("yyyy-MM-dd'T'HH:mm:ss")
                    } else {
                        return ''
                    }
                })

                dateTimeNew.value = dateTimeWithZone.value // format: 2022-10-28T11:20:41
            })

            const updateDateTimeAndTimeZone = () => {
                // Separate dataNew
                const timeZoneRegex = /([+-]\d{2}:\d{2})$/;
                const [datePart, timeZonePart] = dateNew.value.split(timeZoneRegex)

                // Set variable for dateTime and timeZone
                dateTimeNew.value = datePart.trim()
                timeZoneNew.value = `${timeZonePart.trim()}`
            }

            const transformDateTime = () => {
                // Transformuj datum
                const transformedDate = DateTime.fromISO(dateTimeNew.value, { zone: timeZoneName.value })
                    .toISO({ includeOffset: true })

                dateTimeNew.value = DateTime.fromISO(transformedDate, { zone: 'utc' }).toFormat("yyyy-MM-dd'T'HH:mm:ss");

                // Update date for emit and edit
                dateNew.value = transformedDate


                updateDateTimeAndTimeZone()
            }

            watch(() => props.value, (newValue) => {
                date.value = newValue
                updateDateTimeAndTimeZone()
            })
            
            watch([dateTime, timeZoneName], () => {
                transformDateTime()
            })


            //RETURN
            return {
                timeZones,
                timeZoneName,
                date,
                dateNew,
                dateTime,
                dateTimeNew,
                timeZone,
                changeTimeZone,
                changeDateTime,
                transformDateTime
            }
        },

        mounted() {
            this.transformDateTime()
        },

        watch: {
            // Change date
            dateNew(newValue, oldValue) {
                this.$emit('date', this.dateNew)
            }
        },
    })
</script>