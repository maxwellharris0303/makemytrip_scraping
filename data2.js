<script nonce="K9aQXCTQdQYKXct">
/*
    */
    (function avoidingXSSviaLocationHash() {
var location = window.location,
    hash = location.hash,
    xss = /[<>'"]/;
        if (
        xss.test( decodeURIComponent( hash ) ) ||
        xss.test( hash )
        ) {
            location.hash = '';
}
})();
        document.documentElement.className = document.documentElement.className.replace('noJS', '') + ' hasJS';
        var b_experiments = { }, WIDTH, B = window.booking = {
            _onfly: [], // "on the fly" functions, will be executed as soon as external js files were loaded
        devTools: {
            trackedExperiments: []
},
        user: {
        },
        env : {
            isRetina : window.devicePixelRatio > 1,
        "b_gtt": 'dLYAeZFVJfNTBBFWZfdASMJVJfcfHKHCTYWPFXO',
        "b_action" : 'hotel',
        "b_secure_domain" : 'https://secure.booking.com',
        "b_site_type" : 'www',
        "b_site_type_id": '1',
        "b_query_params_with_lang_no_ext": '?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&',
        "b_query_params_with_lang_no_ext_enforce_lang_aid_currency": '?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&;lang=en-us;aid=304142;selected_currency=EUR',
        "b_travel_comm_url_with_lang": 'https://community.booking.com/?profile.language=en',
        "b_calendar2" : '1',
        "BHDTJdReLGMeEcYPffcVDZBZMO": true,
        "b_max_los_data_for_prefilled_dest" : {"is_fullon":0,"has_extended_los":1,"max_allowed_los":90,"extended_los":90,"experiment":"BHDTJdReQHUYYOLEaMYYXO","default_los":45},
        /*
        */
        "b_partner_channel_id": '3',
        "b_bookings_owned": '1',
        "b_google_maps_key_params" : 'true&indexing=true',
        "b_lang" : 'en',
        "b_checkin_date": '2023-11-03',
        "b_checkout_date": '2023-11-04',
        "b_checkin_checkout_interval": 1,
        "b_checkin_checkout_interval_in_weeks": 0,
        "b_has_valid_dates": 1,
        "b_countrycode" : 'fr',
        "b_guest_country" : 'fi',
        "b_locale" : 'en-us',
        "b_lang_for_url" : 'en-us',
        "b_this_urchin" : '/hotel/fr/residence-quintinie-square.html?label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&all_sr_blocks=132238607_375899913_2_0_0&amp;dest_id=-1456928&amp;dest_type=city&amp;group_adults=2&amp;group_children=0&amp;hapos=2&amp;highlighted_blocks=132238607_375899913_2_0_0&amp;hpos=2&amp;matching_block_id=132238607_375899913_2_0_0&amp;nad_cpc=2.26&amp;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0&amp;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;sr_pri_blocks=132238607_375899913_2_0_0__40778&amp;srepoch=1698989544&amp;srpvid=7493252703f90078&amp;type=total&amp;ucfs=1&&',
        "b_flag_to_suggest" : 'us',
        "b_companyname" : 'Booking.com',
        "b_partner_vertical" : 'channel_direct',
        b_date_format: {"short_date_without_year_range":"{short_month_name} {day_of_month} - {short_month_name_until} {day_of_month_until}","day_short_month_year":"{short_month_name} {day_name}, {full_year}","day_month_year_between":"between {month_name} {day_name}, {full_year} and {month_name_until} {day_name_until}, {full_year_until}","day_month":"{month_name} {day_name}","short_month_with_year":"{short_month_name} {full_year}","day_month_year":"{month_name} {day_name}, {full_year}","date_with_short_weekday_without_year":"{short_weekday}, {month_name} {day_of_month} ","short_weekday_only":"{short_weekday}","day_short_month_year_other":"{short_month_name} {day_name_other}, {full_year}","numeric_day_month_year_on":"on {month_name_0}/{day_name_0}/{full_year}","date_with_weekday_with_markers":"{weekday}, {begin_marker}{month_name} {day_of_month}{end_marker}, {full_year}","ux_day_month":"{month_1} {day_1}","date_with_weekday_time_from_until":"{weekday}, {begin_marker}{month_name} {day_of_month}{end_marker}, {full_year} from {time} until {time_until}","date_range_with_short_weekday_short_month":"{short_weekday}, {short_month_name} {day_of_month} – {short_weekday_until}, {short_month_name_until} {day_of_month_until} ","day_short_month_year_time":"{short_month_name} {day_of_month}, {full_year}, {time}","numeric_day_month_year_from":"from {month_name_0}/{day_name_0}/{full_year}","day_month_other":"{month_name} {day_other}","short_date":"{short_month_name} {day_of_month}, {full_year}","day_month_year_time_before":"before {time} on {month_name} {day_name}, {year}","date_with_weekday_time_from":"{weekday}, {begin_marker}{month_name} {day_of_month}{end_marker}, {full_year} from {time}","numeric_day_month_year_time_before":"before {time} on {month_name_0}/{day_name_0}/{full_year}","numeric_day_month_year_until":"until {month_name_0}/{day_name_0}/{full_year}","day_short_month_year_from":"from {short_month_name} {day_name}, {full_year}","day_month_year_from":"from {month_name} {day_name}, {full_year}","day_short_month_year_until":"until {short_month_name} {day_name}, {full_year}","ux_day_month_on":"on {month_2} {day_2}","numeric_day_month_year_between":"between {month_name_0}/{day_name_0}/{full_year} and {month_name_0_until}/{day_name_0_until}/{full_year_until}","day_month_year_until":"until {month_name} {day_name}, {full_year}","day_short_month_between":"{short_month_name} {day_of_month} – {short_month_name_until} \n{day_of_month_until} ","day_month_between":"between {month_name} {day_name} and {month_name_until} {day_name_until}","range_from_long_date_time_until_long_date_time":"from {month_name} {day_of_month}, {full_year} at {time} until {month_name_until} {day_of_month_until}, {full_year_until} at {time_until}","numeric_day_month_year":"{month_name_0}/{day_name_0}/{full_year}","day_short_month_year_between":"{short_month_name} {day_of_month}, {full_year} – {short_month_name_until} {day_of_month_until}, {full_year_until}","date_with_short_weekday_with_year":"{short_weekday}, {month_name} {day_of_month}, {full_year}","day_month_year_on":"on {month_name} {day_name}, {full_year}","date_with_weekday_time_until":"{weekday}, {begin_marker}{month_name} {day_of_month}{end_marker}, {full_year} until {time}","date_with_year":"{month_name} {day_of_month}, {full_year}","short_date_with_weekday_without_year":"{short_weekday}, {short_month_name} {day_of_month}","month_with_year":"{month_name_with_year_only} {full_year}","day_of_month_only":"{day_of_month}","date_with_weekday":"{weekday}, {month_name} {day_of_month}, {full_year}","day_month_on":"on {month_name} {day_name}","day_month_from":"from {month_name} {day_name}","date_with_weekday_time_at":"date_with_weekday_time_at","short_date_without_year":"{short_month_name} {day_of_month}","day_short_month_year_time_between":"{short_month_name} {day_of_month}, {full_year}, {time} – {time_until}","day_short_month_year_on":"on {short_month_name} {day_name}, {full_year}","from_month_with_year":"since {month_name_from} {full_year}","in_month_with_year":"in {month_name_in} {full_year}","numeric_date_range":"{month}/{day_of_month} - {month_until}/{day_of_month_until}","date_with_weekday_to":"{weekday_to} {day_of_month} {month_name_to} {full_year}","short_month_only":"{short_month_name}","long_date_range_both_years":"{month_name} {day_of_month}, {full_year} – {month_name_until} {day_of_month_until}, {full_year_until}","month_name_only":"{month_name_nom}","date_without_year":"{month_name} {day_of_month}","day_month_until":"until {month_name} {day_name}","day_month_year_other":"{month_name} {day_other}, {full_year}","day_short_month_time":"{short_month_name} {day_of_month}, {time}","numeric_date":"{month}/{day_of_month}/{full_year}","numeric_date_range_both_years":"{month}/{day_of_month}/{full_year} - {month_until}/{day_of_month_until}/{full_year_until}","day_short_month_time_between":"{short_month_name} {day_of_month}, {time} – {time_until}","short_date_with_weekday":"{short_weekday}, {short_month_name} {day_of_month}, {full_year}","date_with_weekday_from":"{weekday_from}, {month_name_from} {day_of_month}, {full_year}"},
        b_month_for_formatted_date: {"1":{"name_def_article_lc":"the January","short_name_only":"Jan","short_name_uc":"January","to_month_lc":"to January","month_2":"January","day_to":"January","name_only":"January","name_in":"January","short_name":"Jan","genitive_uc":"January","on_day_month":"01","name":"January","name_lc":"January","genitive_lc":"January","name_with_year_only":"January","name_def_article_uc":"The January","name_to":"January","name_from":"January","in_month_lc":"in January","month_1":"January","name_uc":"January","name_other":"January"},"10":{"in_month_lc":"in October","name_def_article_uc":"The October","name_to":"October","name_from":"October","month_1":"October","name_uc":"October","name_other":"October","to_month_lc":"to October","month_2":"October","short_name_only":"Oct","name_def_article_lc":"the October","short_name_uc":"October","name_only":"October","on_day_month":"10","name_in":"October","short_name":"Oct","genitive_uc":"October","genitive_lc":"October","name_with_year_only":"October","name":"October","name_lc":"October"},"11":{"name_uc":"November","name_other":"November","name_from":"November","name_to":"November","name_def_article_uc":"The November","in_month_lc":"in November ","month_1":"November","genitive_uc":"November ","short_name":"Nov","name_in":"November","on_day_month":"11","name_lc":"November","name":"November","name_with_year_only":"November","genitive_lc":"November ","short_name_uc":"November","name_def_article_lc":"the November","short_name_only":"Nov","month_2":"November","to_month_lc":"to November ","name_only":"November"},"12":{"name_with_year_only":"December","genitive_lc":"December ","name":"December","name_lc":"December","on_day_month":"12","genitive_uc":"December","name_in":"December","short_name":"Dec","name_only":"December","to_month_lc":"to December","month_2":"December","short_name_uc":"December","name_def_article_lc":"the December","short_name_only":"Dec","name_other":"December","name_uc":"December","month_1":"December","in_month_lc":"in December","name_from":"December","name_def_article_uc":"The December","name_to":"December"},"2":{"name_def_article_uc":"The February","name_to":"February","name_from":"February","in_month_lc":"in February ","month_1":"February","name_uc":"February","name_other":"February","short_name_only":"Feb","name_def_article_lc":"the February","short_name_uc":"February","to_month_lc":"to February ","month_2":"February","day_to":"February","name_only":"February","name_in":"February","short_name":"Feb","genitive_uc":"February ","on_day_month":"02","name":"February","name_lc":"February","genitive_lc":"February ","name_with_year_only":"February"},"3":{"name":"March","name_lc":"March","genitive_lc":"March","name_with_year_only":"March","short_name":"Mar","name_in":"March","genitive_uc":"March","on_day_month":"03","day_to":"March","name_only":"March","name_def_article_lc":"the March","short_name_only":"Mar","short_name_uc":"March","month_2":"March","to_month_lc":"to March","name_other":"March","name_uc":"March","month_1":"March","name_to":"March","name_def_article_uc":"The March","name_from":"March","in_month_lc":"in March"},"4":{"name_uc":"April","name_other":"April","in_month_lc":"in April","name_from":"April","name_to":"April","name_def_article_uc":"The April","month_1":"April","on_day_month":"04","genitive_uc":"April","name_in":"April","short_name":"Apr","name_with_year_only":"April","genitive_lc":"April","name":"April","name_lc":"April","month_2":"April","to_month_lc":"to April","short_name_uc":"April","short_name_only":"Apr","name_def_article_lc":"the April","name_only":"April"},"5":{"name_only":"May","to_month_lc":"to May","month_2":"May","short_name_only":"May","name_def_article_lc":"the May","short_name_uc":"May","genitive_lc":"May","name_with_year_only":"May","name_lc":"May","name":"May","on_day_month":"05","name_in":"May","short_name":"May","genitive_uc":"May","month_1":"May","in_month_lc":"in May","name_to":"May","name_def_article_uc":"The May","name_from":"May","name_other":"May","name_uc":"May"},"6":{"name_other":"June","name_uc":"June","month_1":"June","name_def_article_uc":"The June","name_to":"June","name_from":"June","in_month_lc":"in June","name_lc":"June","name":"June","genitive_lc":"June","name_with_year_only":"June","short_name":"Jun","name_in":"June","genitive_uc":"June","on_day_month":"06","name_only":"June","name_def_article_lc":"the June","short_name_only":"Jun","short_name_uc":"June","month_2":"June","to_month_lc":"to June"},"7":{"to_month_lc":"to July","month_2":"July","name_def_article_lc":"the July","short_name_only":"Jul","short_name_uc":"July","name_only":"July","on_day_month":"07","short_name":"Jul","name_in":"July","genitive_uc":"July","genitive_lc":"July","name_with_year_only":"July","name":"July","name_lc":"July","in_month_lc":"in July","name_to":"July","name_def_article_uc":"The July","name_from":"July","month_1":"July","name_uc":"July","name_other":"July"},"8":{"genitive_lc":"August","name_with_year_only":"August","name_lc":"August","name":"August","on_day_month":"08","name_in":"August","short_name":"Aug","genitive_uc":"August","name_only":"August","to_month_lc":"to August","month_2":"August","short_name_only":"Aug","name_def_article_lc":"the August","short_name_uc":"August","name_other":"August","name_uc":"August","month_1":"August","in_month_lc":"in August","name_def_article_uc":"The August","name_to":"August","name_from":"August"},"9":{"month_1":"September","in_month_lc":"in September","name_to":"September","name_def_article_uc":"The September","name_from":"September","name_other":"September","name_uc":"September","name_only":"September","to_month_lc":"to September","month_2":"September","short_name_only":"Sep","name_def_article_lc":"the September","short_name_uc":"September","genitive_lc":"September","name_with_year_only":"September","name":"September","name_lc":"September","on_day_month":"09","short_name":"Sep","name_in":"September","genitive_uc":"September"}},
        b_weekday_formatted_date: {"1":{"shortest":"Mo","short_uc":"Mon","name_lc":"Monday","name":"Monday","short":"Mon","name_from":"Monday","name_to":"Monday","name_other_uc":"Monday","name_from_preposition":"From Monday","name_uc":"Monday","name_other":"Monday","name_on":"Monday"},"2":{"name_other_uc":"Tuesday","name_from_preposition":"From Tuesday","name_from":"Tuesday","name_to":"Tuesday","name_other":"Tuesday","name_on":"Tuesday","name_uc":"Tuesday","short_uc":"Tue","shortest":"Tu","name":"Tuesday","name_lc":"Tuesday","short":"Tue"},"3":{"name_from_preposition":"From Wednesday","name_other_uc":"Wednesday","name_to":"Wednesday","name_from":"Wednesday","name_on":"Wednesday","name_other":"Wednesday","name_uc":"Wednesday","short_uc":"Wed","shortest":"We","short":"Wed","name":"Wednesday","name_lc":"Wednesday"},"4":{"short":"Thu","name_lc":"Thursday","name":"Thursday","short_uc":"Thu","shortest":"Th","name_on":"Thursday","name_other":"Thursday","name_uc":"Thursday","name_from_preposition":"From Thursday","name_other_uc":"Thursday","name_to":"Thursday","name_from":"Thursday"},"5":{"name_to":"Friday","name_from":"Friday","name_from_preposition":"From Friday","name_other_uc":"Friday","name_uc":"Friday","name_on":"Friday","name_other":"Friday","shortest":"Fr","short_uc":"Fri","short":"Fri","name_lc":"Friday","name":"Friday"},"6":{"short":"Sat","name_lc":"Saturday","name":"Saturday","shortest":"Sa","short_uc":"Sat","name_uc":"Saturday","name_on":"Saturday","name_other":"Saturday","name_to":"Saturday","name_from":"Saturday","name_from_preposition":"From Saturday","name_other_uc":"Saturday"},"7":{"name_lc":"Sunday","name":"Sunday","short":"Sun","short_uc":"Sun","shortest":"Su","name_other":"Sunday","name_on":"Sunday","name_uc":"Sunday","name_other_uc":"Sunday","name_from_preposition":"From Sunday","name_to":"Sunday","name_from":"Sunday"},"8":{"name_uc":"name_uc","short":"short","name_on":"name_on","name_other":"name_other","name_lc":"every day","name":"Every day","shortest":"shortest","name_from":"name_from","name_to":"name_to","name_from_preposition":"From any day","short_uc":"short_uc","name_other_uc":"name_other_uc"}},
        b_time_format: {"AM_symbol":{"name":"AM"},"PM_symbol":{"name":"PM"},"time":{"name":"{hour_12h_no0}:{minutes} {AM_PM}"},"time_12":{"name":"{hour_12h_no0}:{minutes} {AM_PM}"},"time_24":{"name":"{hour_24h_no0}:{minutes}"}},
        "b_protocol": 'https',
        auth_level : "2",
        b_user_auth_level_is_high : 1,
        b_user_auth_level_is_low_or_high : 1,
        b_check_ot_consent : 1,
        bui: {
            color: {
            bui_color_grayscale_dark: "#333333",
        bui_color_grayscale: "#6B6B6B",
        bui_color_grayscale_light: "#BDBDBD",
        bui_color_grayscale_lighter: "#E6E6E6",
        bui_color_grayscale_lightest: "#F5F5F5",
        bui_color_primary_dark: "#00224F",
        bui_color_primary: "#003580",
        bui_color_primary_light: "#BAD4F7",
        bui_color_primary_lighter: "#EBF3FF",
        bui_color_primary_lightest: "#FAFCFF",
        bui_color_complement_dark: "#CD8900",
        bui_color_complement: "#FEBB02",
        bui_color_complement_light: "#FFE08A",
        bui_color_complement_lighter: "#FDF4D8",
        bui_color_complement_lightest: "#FEFBF0",
        bui_color_callout_dark: "#BC5B01",
        bui_color_callout: "#FF8000",
        bui_color_callout_light: "#FFC489",
        bui_color_callout_lighter: "#FFF0E0",
        bui_color_callout_lightest: "#FFF8F0",
        bui_color_destructive_dark: "#A30000",
        bui_color_destructive: "#CC0000",
        bui_color_destructive_light: "#FCB4B4",
        bui_color_destructive_lighter: "#FFEBEB",
        bui_color_destructive_lightest: "#FFF0F0",
        bui_color_constructive_dark: "#006607",
        bui_color_constructive: "#008009",
        bui_color_constructive_light: "#97E59C",
        bui_color_constructive_lighter: "#E7FDE9",
        bui_color_constructive_lightest: "#F1FEF2",
        bui_color_action: "#0071C2",
        bui_color_white: "#FFFFFF",
        bui_color_black: "#000000"
}
},
        bb: {
            ibb: "",
        uibb: "",
        ibbta: "",
        itp: "0",
        iuibb: "",
        bme: "0",
        euibb: "",
        tp: "2"
},
        b_growls_close_fast: 1,
        fe_enable_login_with_phone_number: 1,
        b_hotel_history_count: parseInt('20', 10),
        asyncLoader: {
            async_assistant_entrypoint_css: 'https://cf2.bstatic.com/static/css/assistant_entrypoint_cft.iq_ltr/611b70b00745fa4412a0101292fb0a1e4c97741e.css',
        async_assistant_entrypoint_js: 'https://cf2.bstatic.com/static/js/assistant_entrypoint_cft/598c75fa958f9dc500d198bd1a5c7d2555652cd3.js',
        async_atlas_places_js: 'https://cf2.bstatic.com/static/js/atlas_places_async_cft/c94b60c4da2dae6b55fd9eabf168f146fc189acf.js',
        async_atlas_v2_cn_js: 'https://cf2.bstatic.com/static/js/async_atlas_v2_cn_cft/8cd523f28dcbabf842625e07e3f11d0d7403001c.js',
        async_atlas_v2_non_cn_js: 'https://cf2.bstatic.com/static/js/async_atlas_v2_non_cn_cft/0968b3ca28c22c9f62a480009f8c7715da29be35.js',
        image_gallery_js: 'https://cf2.bstatic.com/static/js/ski_lp_overview_panel_cft/9d8e7cfd33a37ffb15285d98f6970024f06cf36d.js',
        image_gallery_css: 'https://cf2.bstatic.com/static/css/ski_lp_overview_panel_cft.iq_ltr/2b3350935410fe4e36d74efed93daf74f2b4ff70.css',
        async_lists_js: 'https://cf2.bstatic.com/static/js/async_lists_cft/ea653b9852a85cb0190755d3979dbd317a486979.js',
        async_atlas_css: 'https://cf2.bstatic.com/static/css/async_atlas_hp_cft.iq_ltr/cfb6d8496023502ee548ec17e18c678883cfd142.css',
        async_hp_atlas_map_js: 'https://cf2.bstatic.com/static/js/async_hp_atlas_map_cft/05e1876f789c9b25aa24073ad3c92baca14fef05.js',
        async_wpm_overlay_css: 'https://cf2.bstatic.com/static/css/async_wpm_overlay_assets_cft.iq_ltr/abb304bf3600a5cf5f7406a27f042cf1ce2429b1.css',
        async_wpm_overlay_js: 'https://cf2.bstatic.com/static/js/async_wpm_overlay_assets_cft/c6cb9b63eea61102d4e96fe72b7c8008652fe925.js',
        async_slider_view_js: 'https://cf2.bstatic.com/mobile/js/async_slider_view_cft/b99d37dd0f12a56f66e827b1f34dbf846a345b1f.js',
        async_slider_view_css: 'https://cf2.bstatic.com/mobile/css/async_slider_view_cft.iq_ltr/6139b93e39f06ca17bf572c4b68667c465df625d.css',
        async_beach_team_pilot_js: 'https://cf2.bstatic.com/mobile/js/async_beach_team_pilot_cft/ff62c2970129adbd98aca84267fe70a81c4a1141.js',
        async_beach_team_pilot_css: 'https://cf2.bstatic.com/mobile/css/async_beach_team_pilot_cft.iq_ltr/41938b9f39dd7ccba8a738db06300257d773b5e0.css',
        async_room_lightbox_js: 'https://cf2.bstatic.com/static/js/async_room_lightbox_cft/c9e29271bb55c367a68d48482525377e12c2b253.js',
        empty: ''
},
        b_gallery_slide_onview: 1,
        fe_enable_fps_goal_with_value: 1,
        b_user_emails: [
        {
            email: "galieebailey@gmail.com"
}
        ],
        b_email_validation_regex : /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2, 14})?$/,
        b_domain_end : '.booking.com',
        b_original_url : 'https:&#47;&#47;www.booking.com&#47;hotel&#47;fr&#47;residence-quintinie-square.html?aid=304142&amp;label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&amp;sid=1fb0f42abddbd4842ab95206c16bb4e4&amp;all_sr_blocks=132238607_375899913_2_0_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=132238607_375899913_2_0_0;hpos=2;matching_block_id=132238607_375899913_2_0_0;nad_cpc=2.26;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132238607_375899913_2_0_0__40778;srepoch=1698989544;srpvid=7493252703f90078;type=total;ucfs=1&amp;',
        b_this_url : '/hotel/fr/residence-quintinie-square.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=132238607_375899913_2_0_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1456928;dest_type=city;group_adults=2;group_children=0;hapos=2;highlighted_blocks=132238607_375899913_2_0_0;hpos=2;matching_block_id=132238607_375899913_2_0_0;nad_cpc=2.26;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132238607_375899913_2_0_0__40778;srepoch=1698989544;srpvid=7493252703f90078;type=total;ucfs=1&',
        b_this_url_without_lang : '/hotel/fr/residence-quintinie-square.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=132238607_375899913_2_0_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1456928;dest_type=city;group_adults=2;group_children=0;hapos=2;highlighted_blocks=132238607_375899913_2_0_0;hpos=2;matching_block_id=132238607_375899913_2_0_0;nad_cpc=2.26;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132238607_375899913_2_0_0__40778;srepoch=1698989544;srpvid=7493252703f90078;type=total;ucfs=1&',
        b_referrer : '',
        b_acc_type : '219',
        b_req_login: '',
        jst : {'loading': true},
        b_timestamp : 1698989558,
        scripts_tracking : {
            atlas:{loaded:false,run:false},
        atlas_cst:{loaded:false,run:false},
        bhc:{loaded:false,run:false},
        calendar2:{loaded:false,run:false},
        hotel:{loaded:false,run:false},
        jquery:{loaded:false,run:false},
        main:{loaded:false,run:false}
},
        enable_scripts_tracking : 1,
        b_ufi : '-1456928',
        "setvar_affiliate_is_bookings2" : 1,
        transl_close_x : 'close',
        transl_checkin_title: 'Check-in date',
        transl_checkout_title: 'Check-out date',
        browser_lang: 'en-us',
        b_hijri_calendar_available: false,
        b_aid: '304142',
        b_label: 'gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB',
        b_sid: '1fb0f42abddbd4842ab95206c16bb4e4',
        b_dest_id: '-1456928',
        ip_country: 'fi',
        country_currency: 'EUR',
        b_selected_currency: 'EUR',
        b_selected_currency_is_hotel_currency: "",
        b_selected_language: 'en-us',
        b_selected_language_country_flag: 'us',
        pageview_id: '0b5926fba48a0192',
        aid: '304142',
        b_csrf_token: 'Nr5EZQAAAAA=pf1kXTGQnNEKpMntRXwCl_RtuhMKoJs1cRJBAscvIpX2CIyvJGxRDDo1-edf5YwZQoNPHtwHkAS9892yhjZ8TfjipZlAgNNO9m4dFAy6whjHlWQsklYkNRCIeDHWVSOrIORG6D1EiDocmkT0ejEjQ4pSpB9o1YD_yU6L6v3HlGxLBP2zkKrfFaq-PFGhT6WBzkcbwCJ-K2CV_LBN',
        b_show_user_accounts_features: 1,
        b_browser: 'firefox',
        b_browser_version: '109',
        et_debug_level: '0',
        icons: '/static/img',
        b_static_images: 'https://cf2.bstatic.com/images/',
        b_currency_url: '/general.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&&amp;tmpl=currency_foldout&amp;cur_currency=EUR&amp;cc1=fr',
        b_currency_change_base_url: '/hotel/fr/residence-quintinie-square.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=132238607_375899913_2_0_0&checkin=2023-11-03&checkout=2023-11-04&dest_id=-1456928&dest_type=city&group_adults=2&group_children=0&hapos=2&highlighted_blocks=132238607_375899913_2_0_0&hpos=2&matching_block_id=132238607_375899913_2_0_0&nad_cpc=2.26&nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0&nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=132238607_375899913_2_0_0__40778&srepoch=1698989544&srpvid=7493252703f90078&type=total&ucfs=1',
        b_languages_url: '/general.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&&amp;tmpl=language_foldout',
        b_weekdays: [
        {"b_is_weekend": parseInt( '' ),
        "b_number": parseInt('1'),
        "name": 'Monday',
        "short": 'Mon',
        "shorter": 'Mon',
"shortest": 'Mo'},
        {"b_is_weekend": parseInt( '' ),
        "b_number": parseInt('2'),
        "name": 'Tuesday',
        "short": 'Tue',
        "shorter": 'Tue',
"shortest": 'Tu'},
        {"b_is_weekend": parseInt( '' ),
        "b_number": parseInt('3'),
        "name": 'Wednesday',
        "short": 'Wed',
        "shorter": 'Wed',
"shortest": 'We'},
        {"b_is_weekend": parseInt( '' ),
        "b_number": parseInt('4'),
        "name": 'Thursday',
        "short": 'Thu',
        "shorter": 'Thu',
"shortest": 'Th'},
        {"b_is_weekend": parseInt( '' ),
        "b_number": parseInt('5'),
        "name": 'Friday',
        "short": 'Fri',
        "shorter": 'Fri',
"shortest": 'Fr'},
        {"b_is_weekend": parseInt( '1' ),
        "b_number": parseInt('6'),
        "name": 'Saturday',
        "short": 'Sat',
        "shorter": 'Sat',
"shortest": 'Sa'},
        {"b_is_weekend": parseInt( '1' ),
        "b_number": parseInt('7'),
        "name": 'Sunday',
        "short": 'Sun',
        "shorter": 'Sun',
"shortest": 'Su'},
        { }],
        b_group: [
        {"guests": 2,
        "children": 0,
        "ages": [ ],
}
        ],
        b_group_rooms_wanted: 1,
        b_simple_weekdays: ['Mo','Tu','We','Th','Fr','Sa','Su'],
        b_simple_weekdays_for_js: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        b_long_weekdays: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        b_short_months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        b_short_months_abbr: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        b_year_months: {
            '2023-11': {'name': 'November 2023' },
        '2023-12': {'name': 'December 2023' },
        '2024-1': {'name': 'January 2024' },
        '2024-2': {'name': 'February 2024' },
        '2024-3': {'name': 'March 2024' },
        '2024-4': {'name': 'April 2024' },
        '2024-5': {'name': 'May 2024' },
        '2024-6': {'name': 'June 2024' },
        '2024-7': {'name': 'July 2024' },
        '2024-8': {'name': 'August 2024' },
        '2024-9': {'name': 'September 2024' },
        '2024-10': {'name': 'October 2024' },
        '2024-11': {'name': 'November 2024' },
        '2024-12': {'name': 'December 2024' },
        '2025-1': {'name': 'January 2025' },
        '2025-2': {'name': 'February 2025' }
},
        b_user_is_new: 1,
        b_is_fb_safe: 1,
        b_is_app: 1,
        first_page_of_results: true,
        b_partner_id: '1',
        b_is_destination_finder_supported: 0,
        b_is_dsf: 0,
        b_pr_param: '',
        /*
        */
        hotelAction: {
            showReviews: parseInt("304", 10),
        minReviews: parseInt("1", 10),
        hotelName: "residence-quintinie-square",
        pageLang: "en-us",
        hotelCountry: "fr"
        ,has_business_reviews: true
},
        feature_profile_split_sb_checkbox: 1,
        inandaround_more: "More",
        b_signup_iframe_url: 'https://secure.booking.com' + '/login.html?tmpl=profile/signup_after_subscribe' + '&lang=en-us' ,
        b_exclude_lang_firstname: 0,
        user_has_dates: 1,
        view_prices_enter_dates: 'To view prices and availability, please enter your dates.',
        autocomplete_categories: {
            city: 'Cities',
        region: 'Regions',
        airport: 'Airports',
        hotel: 'Hotels',
        landmark: 'Landmarks',
        country: 'Countries',
        district: 'Districts',
        theme: 'Themes'
},
        autocomplete_skip_suggestions: 'Search for more options',
        autocomplete_counter_label: 'Properties nearby',
        autocomplete : {
            property_nearby: '1 property nearby',
        properties_nearby: ' properties nearby',
        hotel: 'property',
        hotels: 'properties',
        hotels_nearby: 'Properties nearby'
},
        lists: {
            collection: [
        {
            id: "1378184004",
        name: "My next trip",
        hotels_count: "0",
        sharing_url: "https://www.booking.com/mywishlist.html?aid=304142&tflv=0&wl=hEYFyBiuwZf2K78iyUsSR3HQH0k&"
}
        ]
},
        touch_os: false,
        calendar_days_allowed_number: 363,
        b_search_max_months: 16,
        has_avatar_uploaded: 1,
        b_password_strength_msg: ['Not long enough','Weak','Fair','Good','Strong','Very Strong'],
        b_passwd_min_length_error: 'Password needs to be at least 8 characters long',
        b_password_must_be_numeric: 'Your booking\'s PIN code should contain 4 digits. Please try again.',
        b_bkng_nr_must_be_numeric: 'Your booking number should contain 9 digits. Please try again.',
        b_blank_numeric_pin: 'Please enter your booking\'s PIN code.',
        b_blank_bkng_nr: 'Please enter your booking number.',
        password_cant_be_username: 'Your password can\'t be the same as your email address',
        b_show_passwd: 'View password',
        b_passwd_tooltip: 'Include capital letters, special characters, and numbers to increase your password strength',
        account_error_add_password: 'Please add a password',
        password_needs_8: 'Password needs to be at least 8 characters long',
        error_sign_up_password_email_combo_01: 'Please check your email address or password and try again.',
        social_plugins_footer: 1,
        b_lazy_load_print_css: 1,
        print_css_href: 'https://cf2.bstatic.com/static/css/print/0cc4ce4b7108d42a9f293fc9b654f749d84ba4eb.css',
        'component/dropdown-onload-shower/header_signin_prompt' : {
            b_action: "hotel"
},
        b_hostname_signup: "www.booking.com",
        b_nonsecure_hostname: "https://www.booking.com",
        b_nonsecure_hostname_signup: "https://www.booking.com",
        b_fd_searchresults_url_signup: "",
        translation_customer_service_which_booking_no_specific: 'No specific reservation',
        stored_past_and_upcoming_bookings: [
        ],
        global_translation_tags: {"one_dot_leader":"\u2024","lrm":"\u200e","nbsp":"&nbsp;","line_break":"\u003cbr\u003e","zwsp":"\u200b","rlm":"\u200f"},
        b_hotel_id: '1322386',
        b_hotel_name: 'Sonder Quintinie',
        b_hotel_image_url_square60: 'https://cf2.bstatic.com/xdata/images/hotel/square60/482927333.jpg?k=ebfa9ac3a120d4ffb0da42b1a51fb7d02b6b3ae3aafb6b7062f26f74fc5750ec&o=&hp=1',
        allRoomPhotos: [
        {
            id: '482927431',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927431.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927431.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:42'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927439',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927439.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927439.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:47'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927435',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927435.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927435.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:44'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927438',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927438.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927438.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:46'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085499',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085499.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085499.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:42'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085510',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085510.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085510.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:07:43'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927457',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927457.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927457.jpg'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:55'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927291',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927291.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927291.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:22'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927296',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927296.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927296.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:24'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927304',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927304.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927304.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:32'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085722',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085722.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085722.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:19'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927309',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927309.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927309.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:37'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927315',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927315.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927315.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:39'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927321',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927321.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927321.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:41'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927330',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927330.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927330.jpg'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:48'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085691',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085691.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085691.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:09'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927497',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927497.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927497.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:51:12'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085699',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085699.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085699.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:11'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927465',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927465.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927465.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:58'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085707',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085707.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085707.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:14'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927468',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927468.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927468.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:59'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085716',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085716.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085716.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:08:16'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927452',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927452.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927452.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:53'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927514',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927514.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927514.jpg'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:20'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085523',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085523.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085523.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:45'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085535',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085535.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085535.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:47'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085543',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085543.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085543.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:48'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085595',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085595.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085595.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:53'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927469',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927469.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927469.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:59'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085603',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085603.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085603.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:07:55'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927488',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927488.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927488.jpg'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:06'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927333',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927333.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927333.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:50'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085466',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085466.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085466.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:37'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927341',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927341.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927341.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:55'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927344',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927344.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927344.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:57'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '483085482',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/483/483085482.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/483/483085482.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:07:39'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        {
            id: '482927362',
        thumb_url: 'https://cf2.bstatic.com/images/hotel/max200/482/482927362.jpg',
        large_url: 'https://cf2.bstatic.com/images/hotel/max1024x768/482/482927362.jpg'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:06'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
}
        ]
}
},
        ],
        hotelPhotos: [
        {
            id: '482927333',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927333.jpg?k=ebfa9ac3a120d4ffb0da42b1a51fb7d02b6b3ae3aafb6b7062f26f74fc5750ec&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927333.jpg?k=ebfa9ac3a120d4ffb0da42b1a51fb7d02b6b3ae3aafb6b7062f26f74fc5750ec&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927333.jpg?k=ebfa9ac3a120d4ffb0da42b1a51fb7d02b6b3ae3aafb6b7062f26f74fc5750ec&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:50'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '472229561',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/472229561.jpg?k=1c91098a84144c5db5d2497b08b626f875554dc8e122e974acd82277691a6d63&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/472229561.jpg?k=1c91098a84144c5db5d2497b08b626f875554dc8e122e974acd82277691a6d63&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/472229561.jpg?k=1c91098a84144c5db5d2497b08b626f875554dc8e122e974acd82277691a6d63&o=&hp=1'
        ,orientation: 'landscape'
        ,created : '2023-06-26 19:28:34'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927304',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927304.jpg?k=b9f559d24dbe124f2ff3fc3636a8e1626725bc4e494df408ea52b1202f8ba6d3&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927304.jpg?k=b9f559d24dbe124f2ff3fc3636a8e1626725bc4e494df408ea52b1202f8ba6d3&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927304.jpg?k=b9f559d24dbe124f2ff3fc3636a8e1626725bc4e494df408ea52b1202f8ba6d3&o=&hp=1'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:32'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927315',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927315.jpg?k=996fe25866a184ec59b29171f580c0103ae6b66d55869ee2fe22fd01c67380da&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927315.jpg?k=996fe25866a184ec59b29171f580c0103ae6b66d55869ee2fe22fd01c67380da&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927315.jpg?k=996fe25866a184ec59b29171f580c0103ae6b66d55869ee2fe22fd01c67380da&o=&hp=1'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:39'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927321',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927321.jpg?k=3d9cc5efa218c3b1a55a4ede9482204bf0b95ad1a7740895eb202132b0761644&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927321.jpg?k=3d9cc5efa218c3b1a55a4ede9482204bf0b95ad1a7740895eb202132b0761644&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927321.jpg?k=3d9cc5efa218c3b1a55a4ede9482204bf0b95ad1a7740895eb202132b0761644&o=&hp=1'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:41'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927330',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927330.jpg?k=c5383e59876d40b5c7e830073c4a4f2a5c2f385fdb99258d5967eba5dd1ac171&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927330.jpg?k=c5383e59876d40b5c7e830073c4a4f2a5c2f385fdb99258d5967eba5dd1ac171&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927330.jpg?k=c5383e59876d40b5c7e830073c4a4f2a5c2f385fdb99258d5967eba5dd1ac171&o=&hp=1'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:49:48'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927341',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927341.jpg?k=f79a5730b5d2de3ae0a36ca14d2f933d291f7a6bfe64bf3e9ee371ad3a69124d&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927341.jpg?k=f79a5730b5d2de3ae0a36ca14d2f933d291f7a6bfe64bf3e9ee371ad3a69124d&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927341.jpg?k=f79a5730b5d2de3ae0a36ca14d2f933d291f7a6bfe64bf3e9ee371ad3a69124d&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:55'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927344',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927344.jpg?k=7b04234d6c7f27c7ac779130c8e50b5e7cc4e700d3631e1dd4c76e0fc69bde9d&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927344.jpg?k=7b04234d6c7f27c7ac779130c8e50b5e7cc4e700d3631e1dd4c76e0fc69bde9d&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927344.jpg?k=7b04234d6c7f27c7ac779130c8e50b5e7cc4e700d3631e1dd4c76e0fc69bde9d&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:49:57'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927362',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927362.jpg?k=6e4a9bdd436668d3cfa85af1b477836083c1b63da464a2f9eaeb3ca2e2baa24e&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927362.jpg?k=6e4a9bdd436668d3cfa85af1b477836083c1b63da464a2f9eaeb3ca2e2baa24e&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927362.jpg?k=6e4a9bdd436668d3cfa85af1b477836083c1b63da464a2f9eaeb3ca2e2baa24e&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:06'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927435',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927435.jpg?k=101e55a97b839798b3cbecf3ce75ef02e7fd3629848ed0fcd57b5049d5292e3f&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927435.jpg?k=101e55a97b839798b3cbecf3ce75ef02e7fd3629848ed0fcd57b5049d5292e3f&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927435.jpg?k=101e55a97b839798b3cbecf3ce75ef02e7fd3629848ed0fcd57b5049d5292e3f&o=&hp=1'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:44'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927438',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927438.jpg?k=04037ee6f90a1232885f18bf2a7c6ec2df4e82b645d91af208f3b39cda9b8a5f&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927438.jpg?k=04037ee6f90a1232885f18bf2a7c6ec2df4e82b645d91af208f3b39cda9b8a5f&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927438.jpg?k=04037ee6f90a1232885f18bf2a7c6ec2df4e82b645d91af208f3b39cda9b8a5f&o=&hp=1'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:46'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927452',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927452.jpg?k=7aae6b26b90b3353d45ca5d03d186144677f2b5eafc77f82a31036a8abf6f4a3&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927452.jpg?k=7aae6b26b90b3353d45ca5d03d186144677f2b5eafc77f82a31036a8abf6f4a3&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927452.jpg?k=7aae6b26b90b3353d45ca5d03d186144677f2b5eafc77f82a31036a8abf6f4a3&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:53'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927457',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927457.jpg?k=a31062afc4d29300c5d5933b382deab7da5627c9860429c7cc30f90a2c7a533a&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927457.jpg?k=a31062afc4d29300c5d5933b382deab7da5627c9860429c7cc30f90a2c7a533a&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927457.jpg?k=a31062afc4d29300c5d5933b382deab7da5627c9860429c7cc30f90a2c7a533a&o=&hp=1'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:55'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927465',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927465.jpg?k=350257246174290c8ae7a0ffafcc59a8bf691440186b40b6d7082b9ab8bc6ced&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927465.jpg?k=350257246174290c8ae7a0ffafcc59a8bf691440186b40b6d7082b9ab8bc6ced&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927465.jpg?k=350257246174290c8ae7a0ffafcc59a8bf691440186b40b6d7082b9ab8bc6ced&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:50:58'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927468',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927468.jpg?k=fc1f7135b172c3257bbd5de1f5cb20dd084ef75707eb02ae4a60b0517b6e8b2b&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927468.jpg?k=fc1f7135b172c3257bbd5de1f5cb20dd084ef75707eb02ae4a60b0517b6e8b2b&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927468.jpg?k=fc1f7135b172c3257bbd5de1f5cb20dd084ef75707eb02ae4a60b0517b6e8b2b&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:50:59'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927473',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927473.jpg?k=3d35b9386f5012d564eac6202f4671fa9ebcb2f9f8dbee7246640eb871a49021&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927473.jpg?k=3d35b9386f5012d564eac6202f4671fa9ebcb2f9f8dbee7246640eb871a49021&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927473.jpg?k=3d35b9386f5012d564eac6202f4671fa9ebcb2f9f8dbee7246640eb871a49021&o=&hp=1'
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:01'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927478',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927478.jpg?k=ca8dfa401cf4ae40072724e946d485969dfb62a87e066d320f682f5faff00c84&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927478.jpg?k=ca8dfa401cf4ae40072724e946d485969dfb62a87e066d320f682f5faff00c84&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927478.jpg?k=ca8dfa401cf4ae40072724e946d485969dfb62a87e066d320f682f5faff00c84&o=&hp=1'
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:03'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927486',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927486.jpg?k=831121934e61ec2dd45a6d05d8fec3c1ef5bb226df81787baa10d41d4b7586de&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927486.jpg?k=831121934e61ec2dd45a6d05d8fec3c1ef5bb226df81787baa10d41d4b7586de&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927486.jpg?k=831121934e61ec2dd45a6d05d8fec3c1ef5bb226df81787baa10d41d4b7586de&o=&hp=1'
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:06'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927490',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927490.jpg?k=125265749771070f4fe45b09f8f0c5a0680d53bbb902ac4d94baa8d8f127b1b8&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927490.jpg?k=125265749771070f4fe45b09f8f0c5a0680d53bbb902ac4d94baa8d8f127b1b8&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927490.jpg?k=125265749771070f4fe45b09f8f0c5a0680d53bbb902ac4d94baa8d8f127b1b8&o=&hp=1'
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:51:08'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927491',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927491.jpg?k=a03d256c3c9910fe2d5d07fb941eeeaa920af84e47525a685b048814783bc3e4&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927491.jpg?k=a03d256c3c9910fe2d5d07fb941eeeaa920af84e47525a685b048814783bc3e4&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927491.jpg?k=a03d256c3c9910fe2d5d07fb941eeeaa920af84e47525a685b048814783bc3e4&o=&hp=1'
        ,orientation: 'landscape'
        ,created : '2023-08-04 03:51:09'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '482927500',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/482927500.jpg?k=5a6c77be04baf61d6e42b9df364e4b435edde16fe5015ea9cbab0384bde004c5&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482927500.jpg?k=5a6c77be04baf61d6e42b9df364e4b435edde16fe5015ea9cbab0384bde004c5&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/482927500.jpg?k=5a6c77be04baf61d6e42b9df364e4b435edde16fe5015ea9cbab0384bde004c5&o=&hp=1'
        ,orientation: 'portrait'
        ,created : '2023-08-04 03:51:15'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085466',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085466.jpg?k=c573c40b468612c8966f8f6c4ece024033a823b69f0316c5d90bdab28b3348fa&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085466.jpg?k=c573c40b468612c8966f8f6c4ece024033a823b69f0316c5d90bdab28b3348fa&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085466.jpg?k=c573c40b468612c8966f8f6c4ece024033a823b69f0316c5d90bdab28b3348fa&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:37'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085482',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085482.jpg?k=1b1c40ee4b3adb89396a9ca68856c049c81a5ba13f2868560bfc8ffaef9d6c2f&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085482.jpg?k=1b1c40ee4b3adb89396a9ca68856c049c81a5ba13f2868560bfc8ffaef9d6c2f&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085482.jpg?k=1b1c40ee4b3adb89396a9ca68856c049c81a5ba13f2868560bfc8ffaef9d6c2f&o=&hp=1'
        ,associated_rooms: [
        '132238608'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:07:39'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085499',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085499.jpg?k=d29ef89ae18fc3b04a3ca2362d5133a56a94d5f1f7152f95a239aa06ef9234bc&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085499.jpg?k=d29ef89ae18fc3b04a3ca2362d5133a56a94d5f1f7152f95a239aa06ef9234bc&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085499.jpg?k=d29ef89ae18fc3b04a3ca2362d5133a56a94d5f1f7152f95a239aa06ef9234bc&o=&hp=1'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:07:42'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085510',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085510.jpg?k=90ee38ca73b1b848a3b0b05bf5589dc993c4602b3eb6edf2bed227e83683d449&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085510.jpg?k=90ee38ca73b1b848a3b0b05bf5589dc993c4602b3eb6edf2bed227e83683d449&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085510.jpg?k=90ee38ca73b1b848a3b0b05bf5589dc993c4602b3eb6edf2bed227e83683d449&o=&hp=1'
        ,associated_rooms: [
        '132238604'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:07:43'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085523',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085523.jpg?k=736517b714edab70fb82398e8e946f6d4caeea5bf06aeadeb70f4a62ea7d1864&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085523.jpg?k=736517b714edab70fb82398e8e946f6d4caeea5bf06aeadeb70f4a62ea7d1864&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085523.jpg?k=736517b714edab70fb82398e8e946f6d4caeea5bf06aeadeb70f4a62ea7d1864&o=&hp=1'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        , name: "Studio"
        ,caption_right: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        ,caption_left: "\n\u003cspan class=\"gallery-info__rn\"\u003e\nStudio\n\u003c/span\u003e\n"
        ,room_id: "132238607"
        ,created : '2023-08-04 18:07:45'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        content: "\n\n\u003cdiv class=\"msg cut-text\"\u003e\n\u003ca\ntabindex=\"-1\"\nclass=\"bui-link bui-link--secondary msg_title js-room-clickable\"\nhref=\"#\"\ndata-component=\"prevent-default-helper\"\n\u003e\nStudio\n\u003c/a\u003e\n\u003c/div\u003e\n\n\n\n",
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085535',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085535.jpg?k=041f5617c2098d9a1d8aa5e361fa720fd1fc9b8fb4b8e8b8b325cd4e1fda8415&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085535.jpg?k=041f5617c2098d9a1d8aa5e361fa720fd1fc9b8fb4b8e8b8b325cd4e1fda8415&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085535.jpg?k=041f5617c2098d9a1d8aa5e361fa720fd1fc9b8fb4b8e8b8b325cd4e1fda8415&o=&hp=1'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        , name: "Studio"
        ,caption_right: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        ,caption_left: "\n\u003cspan class=\"gallery-info__rn\"\u003e\nStudio\n\u003c/span\u003e\n"
        ,room_id: "132238607"
        ,created : '2023-08-04 18:07:47'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        content: "\n\n\u003cdiv class=\"msg cut-text\"\u003e\n\u003ca\ntabindex=\"-1\"\nclass=\"bui-link bui-link--secondary msg_title js-room-clickable\"\nhref=\"#\"\ndata-component=\"prevent-default-helper\"\n\u003e\nStudio\n\u003c/a\u003e\n\u003c/div\u003e\n\n\n\n",
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085543',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085543.jpg?k=cc24fd5e7c43a149ea17eb974007c685b07992b61c5744db44963b9df706ef45&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085543.jpg?k=cc24fd5e7c43a149ea17eb974007c685b07992b61c5744db44963b9df706ef45&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085543.jpg?k=cc24fd5e7c43a149ea17eb974007c685b07992b61c5744db44963b9df706ef45&o=&hp=1'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        , name: "Studio"
        ,caption_right: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        ,caption_left: "\n\u003cspan class=\"gallery-info__rn\"\u003e\nStudio\n\u003c/span\u003e\n"
        ,room_id: "132238607"
        ,created : '2023-08-04 18:07:48'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        content: "\n\n\u003cdiv class=\"msg cut-text\"\u003e\n\u003ca\ntabindex=\"-1\"\nclass=\"bui-link bui-link--secondary msg_title js-room-clickable\"\nhref=\"#\"\ndata-component=\"prevent-default-helper\"\n\u003e\nStudio\n\u003c/a\u003e\n\u003c/div\u003e\n\n\n\n",
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085595',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085595.jpg?k=30d351e6df5ce999423fd156bcb87367ac1b290eb78961cbbc2111bf252d528b&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085595.jpg?k=30d351e6df5ce999423fd156bcb87367ac1b290eb78961cbbc2111bf252d528b&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085595.jpg?k=30d351e6df5ce999423fd156bcb87367ac1b290eb78961cbbc2111bf252d528b&o=&hp=1'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'landscape'
        , name: "Studio"
        ,caption_right: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        ,caption_left: "\n\u003cspan class=\"gallery-info__rn\"\u003e\nStudio\n\u003c/span\u003e\n"
        ,room_id: "132238607"
        ,created : '2023-08-04 18:07:53'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        content: "\n\n\u003cdiv class=\"msg cut-text\"\u003e\n\u003ca\ntabindex=\"-1\"\nclass=\"bui-link bui-link--secondary msg_title js-room-clickable\"\nhref=\"#\"\ndata-component=\"prevent-default-helper\"\n\u003e\nStudio\n\u003c/a\u003e\n\u003c/div\u003e\n\n\n\n",
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085603',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085603.jpg?k=5cd16787eff6d3483e279d8606b4316b3ab0109c9c9811f9d5febc25af15d23e&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085603.jpg?k=5cd16787eff6d3483e279d8606b4316b3ab0109c9c9811f9d5febc25af15d23e&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085603.jpg?k=5cd16787eff6d3483e279d8606b4316b3ab0109c9c9811f9d5febc25af15d23e&o=&hp=1'
        ,associated_rooms: [
        '132238607'
        ]
        ,orientation: 'portrait'
        , name: "Studio"
        ,caption_right: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
        ,caption_left: "\n\u003cspan class=\"gallery-info__rn\"\u003e\nStudio\n\u003c/span\u003e\n"
        ,room_id: "132238607"
        ,created : '2023-08-04 18:07:55'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        content: "\n\n\u003cdiv class=\"msg cut-text\"\u003e\n\u003ca\ntabindex=\"-1\"\nclass=\"bui-link bui-link--secondary msg_title js-room-clickable\"\nhref=\"#\"\ndata-component=\"prevent-default-helper\"\n\u003e\nStudio\n\u003c/a\u003e\n\u003c/div\u003e\n\n\n\n",
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085691',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085691.jpg?k=8efb29a449d4109259f709d05436528adaa1dd7b3712662e20c08c7d76a1ea8f&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085691.jpg?k=8efb29a449d4109259f709d05436528adaa1dd7b3712662e20c08c7d76a1ea8f&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085691.jpg?k=8efb29a449d4109259f709d05436528adaa1dd7b3712662e20c08c7d76a1ea8f&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:09'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085699',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085699.jpg?k=4fee4b5a44190c8c4f76e8932fa915900892bcb919cb4f3b8809adc91266df55&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085699.jpg?k=4fee4b5a44190c8c4f76e8932fa915900892bcb919cb4f3b8809adc91266df55&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085699.jpg?k=4fee4b5a44190c8c4f76e8932fa915900892bcb919cb4f3b8809adc91266df55&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:11'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085707',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085707.jpg?k=1c71782968f4887efa84b5f5ae33c691f2956dbc7160d6a090bf8e86aca28cfe&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085707.jpg?k=1c71782968f4887efa84b5f5ae33c691f2956dbc7160d6a090bf8e86aca28cfe&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085707.jpg?k=1c71782968f4887efa84b5f5ae33c691f2956dbc7160d6a090bf8e86aca28cfe&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:14'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085716',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085716.jpg?k=a2268fc764d27036302d7044b1d0cb6b66582a09e9a7db0e1b9e8d5fa89616e6&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085716.jpg?k=a2268fc764d27036302d7044b1d0cb6b66582a09e9a7db0e1b9e8d5fa89616e6&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085716.jpg?k=a2268fc764d27036302d7044b1d0cb6b66582a09e9a7db0e1b9e8d5fa89616e6&o=&hp=1'
        ,associated_rooms: [
        '132238606'
        ]
        ,orientation: 'portrait'
        ,created : '2023-08-04 18:08:16'
        ,grid: {
            photo_width: 1920,
        photo_height: 2880,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085722',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085722.jpg?k=1a622383d247d134e93f786e02a52794fc615760e7c9961e270a57809b0bcb85&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085722.jpg?k=1a622383d247d134e93f786e02a52794fc615760e7c9961e270a57809b0bcb85&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085722.jpg?k=1a622383d247d134e93f786e02a52794fc615760e7c9961e270a57809b0bcb85&o=&hp=1'
        ,associated_rooms: [
        '132238605'
        ]
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:19'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085740',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085740.jpg?k=db966e2ed75e7b7b176e7e2b667d87e31608b9dfddc7add4375c2504ae5e51d6&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085740.jpg?k=db966e2ed75e7b7b176e7e2b667d87e31608b9dfddc7add4375c2504ae5e51d6&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085740.jpg?k=db966e2ed75e7b7b176e7e2b667d87e31608b9dfddc7add4375c2504ae5e51d6&o=&hp=1'
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:24'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: '483085761',
        thumb_url: 'https://cf2.bstatic.com/xdata/images/hotel/max200/483085761.jpg?k=90e8c0517f0bc7612f8b7d841b807db3eb64886b883cbd39522e4f1c9ccfb4f0&o=&hp=1',
        large_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/483085761.jpg?k=90e8c0517f0bc7612f8b7d841b807db3eb64886b883cbd39522e4f1c9ccfb4f0&o=&hp=1'
        ,highres_url: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/483085761.jpg?k=90e8c0517f0bc7612f8b7d841b807db3eb64886b883cbd39522e4f1c9ccfb4f0&o=&hp=1'
        ,orientation: 'landscape'
        ,created : '2023-08-04 18:08:29'
        ,grid: {
            photo_width: 2880,
        photo_height: 1920,
        gridTrack:[
        {
            track: 'customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1',
        on:'click'
}
        ]
}
}
        ,
        {
            id: "landmark-9919-1",
        thumb_url: 'https://cf2.bstatic.com/xdata/images/landmark/square90/200274.webp?k=49a6eea23fe1c340ae7b3b9375247ffff5d4cb87fddaede93e61913bff2e35d9&o=',
        large_url: 'https://cf2.bstatic.com/xdata/images/landmark/max1024/200272.webp?k=6052f64e1834cbd6bcf681a3f215ece2480fc9642b712bd10b3d8996ebef2f93&o='
        ,caption_left : "\n\n\n\n\n\n\n\n\u003cspan class=\"msg\"\u003e\n\n\n\n\u003cstrong\u003eVaugirard Metro Station\u003c/strong\u003e: only 5 minutes away! (\u003cspan\u003e394 m\u003c/span\u003e by foot)\n\n\n\u003c/span\u003e\n"
        ,grid: {
            photo_width: "",
        photo_height: "",
        content: "\n\n\n\n\n\n\n\n\u003cspan class=\"msg\"\u003e\n\n\n\n\u003cstrong\u003eVaugirard Metro Station\u003c/strong\u003e: only 5 minutes away! (\u003cspan\u003e394 m\u003c/span\u003e by foot)\n\n\n\u003c/span\u003e\n",
        is_landmark: true,
        gridTrack:[
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:1",
        on:'click'
},
        {
            track: "customGoal:aXBNTfZHQSVTMIcOcfPUMVBFUWe:3",
        on:'click'
}
        ]
}
}
        ],
        b_hotelfeaturedreviews_url: '/hotelfeaturedreviews/fr/residence-quintinie-square.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=132238607_375899913_2_0_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1456928;dest_type=city;group_adults=2;group_children=0;hapos=2;highlighted_blocks=132238607_375899913_2_0_0;hpos=2;matching_block_id=132238607_375899913_2_0_0;nad_cpc=2.26;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132238607_375899913_2_0_0__40778;srepoch=1698989544;srpvid=7493252703f90078;type=total;ucfs=1&',
        hp_gallery_lazyload: 'ondemand',
        hp_gallery_fade_speed: 2000,
        hp_gallery_autoplay_speed: 3000,
        b_run_hp_gallery_corner_navigation: true,
        b_run_hp_booking_summary: true,
        b_run_hp_gently_select_rooms: 1,
        run_hp_cheapest_room_reinforcement_double_occupancy: true,
        hp_location_block: true,
        b_run_hp_rt_lightbox_image_gallery_v2: true,
        b_run_droom_hp_rt_lb_new_gallery: true,
        b_run_droom_hp_increase_lb_photo_res: true,
        b_run_hp_fixed_review_height: true,
        run_hp_rt_lightbox: true,
        run_hp_rt_lightbox_no_dates: true,
        b_run_hp_rt_lightbox_image_gallery: true,
        b_user_is_using_one_list_only: '0',
        defaultReviewsLanguage: '',
        fe_reviews_base_params: {
            score: "",
        dist: "1",
        rows: "10",
        offset: "0",
        topics: [],
        lang: [],
        type: ["total"],
        page: "residence-quintinie-square",
        country: "fr",
        rurl: "",
        query: ".html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        sort: "",
},
        filterReviewsByTopic: 2,
        defaultReviewsTopic: [],
        instalments_minimum_price: '',
        payment_possible_in_instalments: '',
        b_search_config: {"b_children_ages_total":[],"b_children_total":0,"b_rooms":[{"b_adults":2,"b_children":0,"b_room_order":1,"b_children_ages":[]}],"b_pets_total":null,"autosplit":1,"b_is_group_search":0,"b_adults_total":2,"traveller_segment":"couple","b_abnormal_params":0,"b_nr_rooms_needed":1,"b_additional_channels":[318],"predicted_traveller_type":"couple"},
        wholesaler_configuration: {
            search_config_adults: '2',
        search_config_children: '0',
        search_config_rooms: '1',
        accommodation_type_id: '219',
        url: '',
        payment_methods_url: "",
        tpi_av_id: '',
        b_3pi_thirdparty_api_failed: '0',
        b_3pi_show_room_in_rt: '0',
        b_send_first_room_id_to_bp_feature: 1,
        business_bookers: {
            b_is_bbtool_user: '',
        b_user_is_business_booker: '',
        b_inferred_user_is_business_booker: ''
},
        availability_exp: {
            geo: '0',
},
        fe_tpi_breakfast_score: '',
        fe_tpi_breakfast_review_nr: '',
        user_name: 'M',
        location_score: '8.7',
        tpi_track_ajax_failures: 1,
        tpi_hp_no_photo_squeak_name: 'PPXGDPTPdKNKNKPZHPWeKe',
        fe_max_occupants: 2,
        b_is_aspiring_genius:0,
        b_checkin_checkout_interval: 1,
        b_checkin_checkout_interval_is_1: 1,
        b_show_citizen_vat_message: 0,
        b_book_window_zero:1,
        b_tpi_optional_mealplans: "",
},
        tpi_search_config: {"b_children_ages_total":[],"b_children_total":0,"b_rooms":[{"b_adults":2,"b_children":0,"b_room_order":1,"b_children_ages":[]}],"b_pets_total":null,"autosplit":1,"b_is_group_search":0,"b_adults_total":2,"traveller_segment":"couple","b_abnormal_params":0,"b_nr_rooms_needed":1,"b_additional_channels":[318],"predicted_traveller_type":"couple"},
        site_type: "www",
        days_to_checkin: "0",
        b_terms_and_conditions_url: 'https://booking.com/content/terms.html?aid=304142&amp;label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&amp;sid=1fb0f42abddbd4842ab95206c16bb4e4&amp;srpvid=7493252703f90078',
        b_blocks_per_room_id : [
        {
            b_blocks: [
        {
            b_block_id: '132238607_375899913_2_0_0',
        b_room_id: '132238607',
},
        ],
},
        ],
        b_gallery_has_photo_tags: false,
        b_rooms_available_and_soldout: [{"b_has_room_inventory":1,"b_name":"Studio","b_blocks":[{"b_raw_price":"477.98","b_price_breakdown_simplified":{"b_vm_products":[{"b_copy_alt":"You’re getting a reduced rate because this property is offering a discount.","b_id":"combined-discount","b_variant":"constructive","b_copy":"15% off"},{"b_copy_alt":"You’re getting a reduced rate because this property is offering a discount on stays between October 1, 2023 and January 3, 2024.","b_id":"late-escape-campaign","b_copy":"Late Escape Deal","b_variant":"constructive"}],"b_strikethrough_price_amount":560.57,"b_tax_exception":0,"b_reward_credit_amount":0,"b_excluded_charges_amount":0,"b_headline_price_amount":477.98},"b_block_id":"132238607_375899913_2_0_0","b_mealplan_included_name":null,"b_stay_prices":[{"b_stays":0,"b_price":"","b_price_per_night":"","b_raw_price":"","b_local_price":0},{"b_raw_price":477.98,"b_local_price":477.98,"b_price_per_night":"€ 478","b_price":"€ 478","b_stays":1}],"b_cancellation_type":"non_refundable","b_nr_stays":1,"b_avg_price_per_night_eur":"477.98","b_rate_is_genius":0,"b_max_persons":2,"b_price":"€ 478"}],"b_roomtype_id":12,"b_id":132238607}],
        b_dehotelized_scarcity_messages: 1,
        b_photo_pid: (1).toString(),
        b_rackrates_monitoring_running: true,
        b_wishlist_referrer : '',
        b_reg_user_last_used_wishlist: [{"b_reg_user_detail_list_name":"wishlist_default_03","b_reg_user_detail_new_page":null,"b_reg_user_detail_list_url":"https://www.booking.com/mywishlist.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&wl_id=1378184004&","b_reg_user_detail_list_id":1378184004}],
        b_reg_user_wishlist_remaining: 29,
        is_user_center_bar: 1,
        b_site_experiment_user_center_bar: 1,
        b_reg_user_is_genius : 1,
        b_user_genius_status : {"is_eligible_for_genius_free_room_upgrade":"","email":"galieebailey@gmail.com","b_is_suspended":"","is_genius":1,"special":"","last_year_bookings_count":0,"b_genius_level":1,"is_suspended":"","kinda_like_track_experiment_ge_genius_plus":0,"qualify_genius_challenge":0,"b_user_id":766810088,"ge_challenge_stayed_bookings_count":0,"trial":{"desktop":{"campaign_id":null,"end_date":null,"end_epoch":null,"is_active":0,"start_date":null,"genius_trial_level":null,"start_epoch":null}},"is_genius_level_1_extended":1,"b_is_aspiring":0,"b_new_level_comms":{"app_is_eligible":1,"b_variant":1,"b_is_eligible":1},"is_user_in_new_tier_system":1,"is_genius_level_2":0,"is_genius_level_2_or_above":0,"genius_level":1,"b_is_genius":1,"is_genius_level_1":1,"can_see_new_aspiring_experiments":0,"is_genius_level_3":0,"no_ge_booking_before":1,"b_relevant_bookings_last_2years_count":0,"has_open_bookings":0,"is_eligible_for_genius_plus":0},
        b_genius_user: {
            first_name: "M",
        last_name: "Jason",
        is_aspiring: 0
},
        b_reg_user_is_genius: 1,
        profile_menu: {
            b_user_auth_level: 2,
        b_domain_for_app: "https://www.booking.com",
        b_query_params_with_lang_no_ext: "?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        b_travel_comm_url_with_lang: "https://community.booking.com/?profile.language=en",
        b_action: "hotel",
        b_site_info: {"is_bookings_owned":1,"is_iam_auth_allowed":1},
        b_site_type: "www",
        b_companyname: "Booking.com",
        b_reg_user_full_name: "M Jason",
        b_is_genius_branded: "1",
        b_reg_user_is_genius: 1,
        b_genius_dashboard_expiry_destfinder_url: "https://www.booking.com/destinationfinderdeals.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&;genius_deals_mode=1;checkin=2023-11-03;checkout=2023-11-04",
        b_reg_user_last_used_wishlist: [{"b_reg_user_detail_list_name":"wishlist_default_03","b_reg_user_detail_new_page":null,"b_reg_user_detail_list_url":"https://www.booking.com/mywishlist.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&wl_id=1378184004&","b_reg_user_detail_list_id":1378184004}],
        b_genius_product_page_url: "https://www.booking.com/genius.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        b_reg_user_five_bookings_challenge: "",
        b_reg_user_detail_name_email_hash: "UmFuZG9tSVYkc2RlIyh9YR4uhwF8f4chY0A7sl9d-_dFOahQDk1M98FLABKw7ttx",
        b_user_is_grap_eligible: 0,
        b_grap_remove_raf_checks: 1,
        b_is_bbtool_admin: "",
        b_is_bbtool_user: "",
        fe_bbtool_permission_is_connected_to_bbtool: "",
        fe_feature_permission_section_reservations: 1,
        fe_this_url_travel_purpose_business: "https://secure.booking.com/company/search.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=business",
        fe_this_url_travel_purpose_leisure: "https://www.booking.com/index.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=leisure",
        fe_reservations_url_travel_purpose_business: "https://secure.booking.com/company/reservations.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=business",
        fe_reservations_url_travel_purpose_leisure: "https://secure.booking.com/myreservations.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=leisure",
        fe_my_settings_url: "https://account.booking.com/oauth2/authorize?aid=304142;client_id=d1cDdLj40ACItEtxJLTo;redirect_uri=https%3A%2F%2Faccount.booking.com%2Fsettings%2Foauth_callback;response_type=code;state=UvIBrPoKvJ-iI1ApY_g1nn8khTta8ZT50vgaLA-WguYWpr7Y4tUuPLRQerHi43g2fb79EAUr6-66muX71otbNMDuZt28Y-jDn44cSdjpVfeM39lUUWc8Y3hfyg1CHOVX7BB7MhIlCRGGkPYzWBNHRleggiWPcp7vREyks8R1wP4U8ww4p9SrvUOwbChQmby0z4kmaITcgcrpfNwNn-ehqCG9Rg0c_WqOHlSAcCYWvrL_v38qXRxllGJMiaCAAR7F5oX5msNAZBuO69LXX3JMLF6a5VXLk3BL9Q3NGkxURgZZgay9gAjx9XUvLXRo14m6hXL_1nc",
        fe_my_settings_url_travel_purpose_business: "https://secure.booking.com/mysettings.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=business",
        fe_my_settings_url_travel_purpose_leisure: "https://secure.booking.com/mysettings.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&sb_travel_purpose=leisure",
        fe_reg_user_avatar: [{"b_reg_user_detail_urls":{"32":"https://lh3.googleusercontent.com/a/ACg8ocKLOvzbyIqqfsow8ng8_Itk5Zdivi0SgiBP78cGgSJrRg=s96-c?sz=32","128":"https://lh3.googleusercontent.com/a/ACg8ocKLOvzbyIqqfsow8ng8_Itk5Zdivi0SgiBP78cGgSJrRg=s96-c?sz=128","256":"https://lh3.googleusercontent.com/a/ACg8ocKLOvzbyIqqfsow8ng8_Itk5Zdivi0SgiBP78cGgSJrRg=s96-c?sz=256","64":"https://lh3.googleusercontent.com/a/ACg8ocKLOvzbyIqqfsow8ng8_Itk5Zdivi0SgiBP78cGgSJrRg=s96-c?sz=64"},"b_reg_user_detail_last_update":123,"b_reg_user_detail_error_msg":null,"b_reg_user_detail_is_facebook_image":1,"b_reg_user_detail_available":1}],
        fe_bbtool_can_see_tool_promos: "1",
        fe_bbtool_can_see_tool_promos: "1",
        fe_bbtool_blackout_user_company: "",
        fe_bbtool_redirect_personal_to_index: 1,
        b_reg_user_company_name: "",
        b_reg_user_company_name_escaped: "",
        b_reg_user_companyjoin_url: "",
        b_bbtool_product_page_url: "https://www.booking.com/business.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&stid=934592",
        b_is_ie7: "",
        b_this_url: "/hotel/fr/residence-quintinie-square.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&all_sr_blocks=132238607_375899913_2_0_0;checkin=2023-11-03;checkout=2023-11-04;dest_id=-1456928;dest_type=city;group_adults=2;group_children=0;hapos=2;highlighted_blocks=132238607_375899913_2_0_0;hpos=2;matching_block_id=132238607_375899913_2_0_0;nad_cpc=2.26;nad_id=2b37d3e0-6d0f-4d12-bcc0-f0a746178781_0;nad_track=eyJyYW5rIjoxLCJrb2RkaVRyYWNraW5nSW5mbyI6IlQrKzBwOWdmemE5RldITGhEemhrWGlyODA0ZkxpaGJjMnNheVR6b3lhYXNlQUF2TzFycGVmS1BtbnMwbEkzZWVidXJLbitEbXA4NGV3bnVQWmNYazhSdno4T3Z4N1ZLcVVwZnkwSFBrdjJTVmEvM3Z3SjNjcE1wNmZvZjBGYlB0V3lwbUhRcVBZOFFxNUIzUk5HWDdxZjNOeWpNM3BhSEJzYmpFeDZBMDRsTHBLZEY2eG9wTURwNmJDTXVJSlpmNExyUnRzdXlQakcxeE4yaUs2QUU4UVZOS1Fab1BKM1FjSks0SU1ocFd5VVE0K3lvanV5WG9ZSzVrMVBZMGJROXZuQTh0YWlNZlJHZGtMRHp6am1uYXN5YnlWTFVrU0dMYmdaVlBSeXFoRldRdTdsNnJoSGxKMHBJdXFFbTJtQ1NrNndyOHYwVFlpb1R2ZVo5LzN4b2hTbTVIVEMxSkYrYWsrMkUvVnlUU1B4Vk1yYVA1ZHc2QzB6Rk1NNzN5RG5ZMVJ3cElsQitTWmJnOCtXem95ZFV1c1JxNkNaUVEzQlgrNTdKYXZnNXRIdHJDU2FCcHU5bWNpZUpQeU5kYUYvYUdOU0o0R2E5SDFocFFtOG5GUXJTRXBvUmFqdlRDN3dCUjZhYVpPSVBzOHlCR3F1eEdwai9wL1I2cVA4K21zQW9HYm8vNGNaTHJodThMUkNFN1BNOEpydjZjY3o0ZzFZVjYvQm9RWFdWcld6Z2REREo1SWdmWWE5K0UrbUp6U0JBMmFqb3N5WUdIWWUzYkh1YW9RekZ3TWorSjBldGNFS3hra2ZWbENDKzVKYWV3ZFZraFFZZGh0TFExY2FxSVo3bURkWm9FOU9FL2pkVWJ4bG81RGN0bk0wd0E3L2kyKzJhd2kwa2dwd3BDSi9nZTBtbVppVk1seU83dkg1a1RqZFBvY0p1TkZ4dGd6cVE5RmxvRWNkZVdFWVJOaDdKSjdIeHpjR2U5Q252L01DRytKMmNjUzZSbmg1MU9BVE03Z2xIVUExbWpyRmNZUnJ6dXdEOXpwVzRtbXhuYjB0dmxrQUhic0RrUmozajU3WmpBam5uT3E0NU91OXFlUll5RmZXTGovMHV4SndNaFp1RHVFTnptaHJra1hwTlI4emJua0tEbkFxNWRWWmFCZDZKanU4NUJwd3BzTzhVTlNFVTdHdllQSlFxSml4R1lxOFU3TWlsemJVb1RkYVRGTDBEekNUcDZSbUcyRlhpNys3MkxITk92d1J1K0ViaisxUk55R3ZHYlVPeGZ5K3pCK2k4b21sYkRld2ltYTRPeXdsUlR4RW9XM1NGZVRKU3poM3JMQUZOcWV5Qk5ZbjBaYnBUcHR1Z2tnMzVObUg3VjZ3NGZFL1g4aWM5TCs0WldhNE9MQTJjUVJpOEhvc3BLY2RCKzl4OUMwWHNPdXAwU0tYUVd1RXhaYnZubUc0M1Z0OCt6SHY5bEVIdWpCclZRVHZJbWhwTDBJU21LUWltMTJrK0NDYkRSano1RjBQQmp6QTZHMTFhTThlcHRvM0U1dkdiazg0Q3JIWDhETTN5dTRHdGlER2FzaE9zdXpWTmRsc3E1TWFOcVorakxvdm9FQ1NmTkQxZFRhczhWL0FOSTl3ckpVK2hZZytmNVIycVdhNm9FWUUvckpnRS9Fb0RteXVPTnFzRmljMkxUZ2lDSkIzb0VDbkR4bFhZM3RzNjBGd1d1YnV3a0sxV0ZBcUVHSEJJNFdDNUV1TXVVOTRHYnFYUkdSM0tmN3dlMDV3RzhXcnlOZDBqcnV4V3FMVFNTZ0F6OHVocTN0QjQweGZGMzdNTEF3QzVxbVN2RGtvV3JycXdiSmpjQWhpWjJzRzFvOFJPcjhMN1BXb20zcTg2ZWVxNllkLzN4SjM4azRIcU80ZGs5Y0xBakhFUEJHYkpsZzN6dkVNSTdSd3dUWjF2RXpUR3JoeGZwVS9iYnZraXFkaDdZYURxazA4dThLN3ZTSS9xb1RaRDFmSkVsekpXVlB1Nkc4c2VSSDE1enIrcml2UE9obHBFUGo2dXZlZUF2NHFEUkg4R0gzUmFSVVc0UHFqU0pKV3JGbGpOMlRaQVd1bE91Q05Ya2d2bEdleFZHQWNiWDV0VjZmL1MrY1JnZEVIRGIrTC9WSDdTNHlXekJhamZGSTluTHB0VGFlN1BpSCtrcHZ3VXVSRHhDdHU4ZlFrL2d6L3NRaHBXRVZCa3J2bXNHYWlsUE9FVXZTMDVibHFsazJPNER0ZXhlYTl5S1VmTkZmTFRnOEtoTktRcjhKandmNlZuMUIrZDJ6cFBGTU5WRXdkdkVCeDJNUGxHRU1Qa0k2cUZUVy9oYm1LdFoxejVHYk1VZFI0VGU2aUwreGdxbGxOSXFtNG1ZUkNPeUpncEg2cEdGODYzNDdYZ24rczVLRitlZWwwcEpEUkxvRXEyWm5WaXAyUStoN21CT2NuR21lbTJYZnhEOWR4Z09wNTN3RXgxbzdtdk5MR2s3Q3FxNTN4Zit4WkZRd3EzYVlTRSttak1MWG55NDVSQ0JrSkoyaDgwMHlYSG1HM3JEN1A3akQ1UG04TElyOE9aU1U5bHFVS0FPWTJaakxBT1lrVUZSSTUxb3dqK0N5MTlwbG53eWZ3djJxK0RReUZGZ09LMS8yTGxZRmZYajJmbVkyNmhYZGdyczNlRUJMT1M4WUVUOWxQYW41MzQ3Uyt2SW5iV1N3UmsxUmFNM1J0cTArNWhXUG42KzRETkpEemRVbHplK21aazZPZWNDckRJejRJZDVsTXliTFA3UWJmRnYvTEc4dWZ2VkZMcDRIL2RCS05IdmxuVXJiM1RYS1MyVnI2TklTYVlEMFlZYW1WaCsxcXVMWWRiSkZHRW1ldmVlMDJIdkNXeUMrL1d4MUFVZ1VDbFo5QXVuUk1BWmMycUZiTnNFa1lEK3VkSksyWXR6V0MwMGhPNXNpamN4aEIvVy8xNHh2TndvS1ExUFRFMjcxL3RvWERUQ3RjeVV1ZTJzRXdyWVdTM0twOE50TVdlV2ttREJzTG9BUGdhNCt3Rlg3aERYTWRMK3JKa1h3U25vaGMrWkZmQnlxUTBGOGJ6WkVSVElVSmZxZE1DWEdLb0srS0FncEEzM3ZNd2lPKzRBS3N6N29LSCtxV1lRL3dsb1djZ2trSzVVUWVqLzI2OVI4c21hS2NITXp6OTBnRG41QVM4L1h5b1ZYQlBqbC9HblBENUx5R0VJYzZlcDBBclNsUEZqUElCNXJ2aGxqbk1CTEF1MVdNM21UUmZ2Mk00U3BuVnpPemNqeHh6cjFBeXREaG5Ldk5Ed1FTY2hsa2huczZuMUNoVzZvejg3bjVOSkNwT2NuQmdNUjFnbW1JSE1rTVFscGVDaXI1T0VyUnhFc2t1NHlnYWxITURpZnhmdTRCb1NRTVFBVjNFeWJlQm1CYjc1dWg4ZkkwQnkxLyt4VGc4OTA2eG5nQ0MzV25WZnRaQTdFYWhXNy9pR21ha2NLY1hxUFBRcVI2a1IyY09rNlA5YVBSVWFXYTJqeFJ4YVpUMm45cVRzQW9USEhxNzVQTUlRWWtpS0h6UnAvc2E5dnhERko0d2Q3QTlnUmZuT1JjT2JJMXJ4Mm5qcGVzcFZiVXZvSTJsZjNwQWZLcnU1cEVXZXdnZEVLVXhId3lxdzF6NUtWSUFnRnFUeDhpZmpOeXA3VlM4Z3N6YnV4YkhOaFpLcEpZbjdPLzE1VEM0QlZnPT0ifQ%3D%3D;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=132238607_375899913_2_0_0__40778;srepoch=1698989544;srpvid=7493252703f90078;type=total;ucfs=1&",
        b_lang_for_url: "en-us",
        b_secure_hostname: "https://secure.booking.com",
        b_nonsecure_hostname: "https://www.booking.com",
        b_query_params_with_lang: ".html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        b_query_params_with_lang_no_ext: "?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        b_travel_comm_url_with_lang: "https://community.booking.com/?profile.language=en",
        b_query_params_delimiter: "&",
        b_reg_user_detail_dashboard_url: "https://secure.booking.com/mydashboard.html?aid=304142&label=gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB&sid=1fb0f42abddbd4842ab95206c16bb4e4&srpvid=7493252703f90078&",
        b_is_reg_user_city_guide_in_lang_available: "0",
        b_aspiring_user_fifth_booking_ufi : "",
        b_reg_user_aspiring_data: "",
        b_dummy_var_for_trailing_comma: false,
        b_ip_country: "fi",
        b_guest_country: "fi",
        b_agent_is_no_robot: 1,
        b_page_name : "hotel",
        b_landingpage_theme_type: "",
        b_brewards_account_details: "",
        b_upcoming_rewards: "",
        b_rewards_reminder_is_on: 1,
        fe_rewards__game_over: "1",
        loyalty_program_rules: "",
        loyalty_program_status: "",
        loyalty_program_bonus_url: "",
        b_brewards_loyalty_program_account_type: "",
        b_user_has_mobile_app: 0,
        b_aid: 304142,
        b_label: "gen173bo-1FCAEoggI46AdIM1gDaEiIAQGYATG4ARfIAQ_YAQHoAQH4AQOIAgGYAgKoAgO4AoCfj6oGwAIB0gIkNDg3ZDc4YmQtYmJhZS00MTNkLWI3YjMtODY1NGUyM2RiNDUw2AIF4AIB",
        fe_show_travel_communities_menu_item: 1,
        fe_show_travel_communities_badge: 1,
        fe_user_can_see_company_reservations: null,
        b_oauth_client_id: "vO1Kblk7xX9tUn2cpZLS",
        b_sso_logout_url: "https://account.booking.com/sso/logout/v3",
        b_sso_logout_callback_url: "https://secure.booking.com/login.html?op=oauth_return",
        fe_sso_logout_state: "UpMbrh0epuzWiqcMXGJVEEn0482GN_VphXyuFKvV2zXK-ureBTZTRwOGoz2NExYfuhcFUQMLp82X7htV2TkL5H1wBgOlILONp5raYAfTh5BRarN6fLnxt9SEvbIbwQgI-ECYTixWpwvM6zAqdilKvo4chVmX5naW9YsTqGmKWzPiR6_ll0MhYjRE4W500deSe5LjYFZNgl_IVOE9mirMNcKYQitb6QcxL2-t6TCaR3aneO6dpaGfnPKyZbNv7OunWi_cT9YABHvVe8Gs1W0OCGLlwmKrkBR15r7k_7eT20Bp8SzOe1tZrxjYw7aCQJT6G8bZHc5Hml6glPP4AVS1ItxxqAW8FJz6XkrZmublkry0kaAY32p0JUkscANH3KeIo63C3EkLw-WEg2nwT9TfeyPHCEeJ3A0nNLxryoTu8eBgqqkXBDXNstw8W5j5DDVzXxU4-PfR6U3p9eqDNp9KjUJiHSQqERA3_m9B51Nv9Y9qz_CWY0SHv2g5en5Az1EoHwjk8TayyCxgeT7lluZ6l5to-_TyIGhuFQ52RuRU-uQcFWCNLJiR5ClUMQbWwjwN9mosfONjZ7SA5AYAEn1BiC2SnBIR4ruXpmPb0B4NF8Vr1MLNEE-R1bbL27P36bvPkF041KbCuX7IYCc8ob1JE1_q2gH7bvm-5i2G-u8rtc0HEMNsTJx3zQrNhxqsawYJRxaWNDOp8DZZvBapGm7uJU7rSn79dyjfOwi0La8fQZpE8xabzeMAGaZqThFs80qPHXuX3k0mP7n-pAq5lKucd96AoKjMoQmHY07t1m_mMADBpiMRzy0oCXqHCHNgqbdlQUBTKnb11gBQoN7KByK-9_4BVL8Ua9GypyFQMEWshIEIudH2sWFe7bW7LXFNoHyFzC5H6kp_6m7un_DFBuCxIyML96e4NTT3ZDl6thV4ecq_oCIiGIvuvzohDGdmgeTyx1FWzW_PDOjbkicQkEKTs_K0OerqIXBVlCmZga986xHB9ZeBe_IrcPJ9YZv8Zt45pvChmZZgIc8-lF7UWuqHQsziCz--8nO0v8S0uiICXhr1D28acreDICbYXPhQd0CeJxvA-2Y4J005K2mF7S9M4mHkZfENAKu6mJ-IQWU9lgru8EmS--1_wxMBtrOG27FYktXiyCYrgRk301JnoOZOfFNIPPHsQLd1dG7XXdFM5VRuwtPn8Nwuzi1VkT789NG8iYTS4Phs4xX1UwARIWxaX6yx-nywseHM8K_W7NIuR9bO9-48M-e8fBJXOJthV4AbaZhk6fPXGzPboIWqobLdNfin0bj0_f_kWP1vJvdFAk9260_vq4rAh0eAlUmUWtLeXDiaQYErcd2cCvzrEVB9BZCKmFZ7a_Dq2xZgMbN8ztjKdGbdB6G1ZlPqeN8dNcSuEehYFKgesljhBGhftpJUJ4ghP2CLNpUpf6BbS2X4ZqS5qLHW9TRxN64Base4P5UV6iigIG8SKOgarJNcPmERZMWcLcVtaIE8blA-uK8VJ6Es2IP49q0a4QJxzlmVMnCv34TUkPlnlqhZWtOoovLKcdtwb8m6P_QpmVFaojfgJ_Ln3f-X-TXMfstK-pTnUP_km5gNUnbTM8GukrD2vUdHy5K5RM7EcvBnsDNy83ZP0pMugqMmvgd95wta-U8nXXhRrms0kPuZgbTSQpbOlfDsaVyZqcGKHmQIt7egz7AZmg_ikWnf44CRKTgEaxc3d2ZOQxlcMbWCwoj2IL0rzK0p34P8ARUYfiXwOcS9aGhWsGrQXdbP6blVFZdcjoBi8Iltey--wZ5-4I0H8noi7jyAXOjmfCsTIZSDaKTVTY0BkRsZpYMN71UIsPtVxMI6RScEKNbGkNQEAMzxBdWTUSM3WWbW9KTUw-Spq1ybrNi9XfycUeC0gev2t2nW8qhY3m6DcWnUv24cp5iBY9U02MUn3EREWC5SglYcHqkyORKSb7X7LqcH78TOOQwJTbNoVNFosZS8ETUciuJpOaaio_NkhF-5zhDoryCNsT7YrmNw9XZn-ILjAsh3kM3dSA9Q2vvxL_unJ_USSzyAOXA9YR-MQyqdzBQ-WTg29l2tK9EU03aNrwBR7ptAF2USQuOC-wA5935oK1m0rmSuJ3k5TyEJLcZTqsUka0IG4zOvqZyToDZ47JrVXFOhZFVpVWcEb185ejHQkhySJNzTHWfqjRNUI6xC3D2TwrC21X5pktzKgCfT5wxXMiFcrqgw2gwB5-cnk4gNmoj7yGq2YHZTa7byuu5_MM3aANuSJ0Ie2-ctxguYM3IHLPajZMwQlURQuyMZ-weMWfdKob5TXEnGyjj8vFSAx4ZnUMTjBEZvDl4s826ao6GhzNGvAWupgR2txtNclHq8A0XCWee3HtQOAkaIV97y8_xkOSCjgnLTHX8YBcdZ_km_6qEX2EKuBtf0QCK5p4yvV8sXIbn9QlnjNRLc4RRzHyryLgC7mRzFUCiRjeHF-GG74-PnKHrOLwFRgQqI4fDCaemCptzH_oRISoz7zFQYy4r47jqNUoDcBcUZb9pZ6PtIAETMoIGEvzfsfsC0oKtlRkweEnvAYt25y2jKchyuYntk9CXHHoVOQRsGdD851wXV48qb5j3VwjPb8RJI4IXFnrgK5DkZLh7ZxU-Lav3uUxMLST2zcidInGzvjtmwjXqS2pu0dcsLx4xCSu1jOHWeAZzFp9P_q1EoUpZO6ehOpaXkozbrpxQjfDMLoIpxAndFxnvAN5FiVpyC_voCBQF-V8e_UMrGLx5dy7ZN7Odn5SU22NifZtftfo6NaZbjfjzBfgvZcknE-M7rVfhTSLE3MFo8U3giS-SpkjWgl0ncykY6FyFQzzprQ6wtYp4XfwFs4GKEdBZO8-ytGpDexoPTJY0h8QIIXXzXf1yWuX6-5-Ja0mpWZ9j9u_1w-7E1BiSFtFGc3EgYPBkPtgnXnGHLvTlRSjBBseuDsk8n-GYlr9XBfllhU5NXA-RdN_82oAx2fa47_0vWrI0O1Ul9cXEUEN_-y5HhJvBZQzRel7AUBlnn0E5sMmkJkCg-hNw8E8WevX9tos1hxKuFECRKSwymmheIXe5m7-Q3O6-Xk6lVYIsFKQLI_Mun3aqDy6pa6-41dlQNNfq-dBOFS0tJhxVm79s7z7CeEmXptO_a_yBQsN_x5b9_nyO8onBSKIyFMp1lMp-VlNoVqu5jvg0V_br3pUzl9IRDndQ6JnD0ZdVYCtHdnuIdWsDnwpbmuFi1roEqIoUeh5Mcj-c9oUkhf0K2_BSXuuSS9X5DTKzuDOe8a6POHs_LgKNrnZicTmKQZG6LKHQRPciJYEhGd6HJNYgE-CXD6i2_Y2qhoAxGHSXfg4CaYA_Umcfxb6puZN355Kv59Kha2Cnk4N5UFiqBhk1nO7zhja5EG8a1EsakXHPKAJRvydh3HOX0fqz_64TvUOQlMD6WMLByLzhdEnH8qdnBgEaK7mbx-Ji8UUScuiMnwLZ-i_2CE-CNHEVTvQzBpwevFbWtD0AQMnFojS5rb2anomBbMv76wvAmxFeyGEh6tMRM58zvfDUAcd5YXECT1pckg_c-JF2wtEhTvJye7karuVVfiKn0L3BE_PJLBQh4bWfg1k452xORZ-hNDrVRjjqf_D3Epo-d0Kms3u9Z9pLj0IwAFOb9L3mP6bly_RaTgOANszmDB__HNDJwTSZbKzJlXPMCN-BSWmZ2jk25vNvSuaCxbb8GTpyZHt2WnX6EcEnR8mGqSzgjd-j8Hzj1CTK_qlezgjIrrj94vUNxaTF7E54LTLCP2IsLZn1py3OjMtar_kzyVprsb8H8u3jDiUM5VsA9fdfFD7FgXohAp9BZDn2EL9oNQf9vkE8AgjIFdlr0WaKU2AYQbknCSTKth_9MIn8FvUp42-MLbIAXRUkqf1GlSNMkVXZ0gRqRhZsjqohNe4RyGQ_0vaIIBRUJPwojqHqJpwQbeAzoPThRuta66ELRkke2K_tF-MSC3IcvpcL5U90ZCUmcpAkPKMexTn_x5aDc96hLxJsPEn45xiAbyJuvWtF49NZra1D6dDVNPvr1xktg5iGnJK0wRBZYiAKS8hb6qx6Aus8sifN89cdEfEKlJTICNG7_G4ehW4JGgstq2UjvFPpJHuuvWf9T2REe-J0YVtEAcXAiF_tHcTmfD2ZHN_40FjNDLLxC6ROemEGO-PCa5kzRR-yTXcFxNc0SaLb7hYW6KtvUiytjuRJWW83jYAbenK-km0FDMRRhLXNkLKPcIdAEb0zIHE3Bn2c5YypUyyrzaKrgInPkPG3nkJszoVr-JV4N5FfOW3UmoEc7Bvd5djOmiVPNUmmFGPiV9C3oXuMYQXKTrbT0Elwrh-ymiCAxqFAwCf9aS1il6ningZ_cCPax9h2AnjHCmcAZ2OA0725a_G5i4umwcQOiaMpuXmJHYRuEZCcevlKoPiImLewwI8JVuN__yaEicJyNRoSUsSSHrYZ4vgQvG8Rj73Zt599fYq0YIRW6TefVfOeagr16w9Z84v6KjgeDe1PA7yO-CsuM20BKN7p39DBY1A8D6_X6dAE6QaRtxHROIq4hCxCDtWTf9k8G9nWwFnbpEITWukYL6GoFLk6sUygH94GJNjuCCrcTac6NLFztNxX8IQ",
        fe_blackout_mydashboard: 0,
        fe_user_menu_aspiring_genius_link: false
},
        accounting_config: {"html_symbol":{"RON":"lei","HKD":"HK$","PHP":"&#8369;","JPY":"&#165;","ILS":"&#x20AA;","TRY":"TL","CLP":"CL$","SGD":"S$","XPF":"CFP","CZK":"K&#269;","IDR":"Rp","EUR":"&#x20AC;","PLN":"z&#x0142;","ARS":"AR$","USD":"US$","INR":"Rs.","BRL":"R$","GBP":"&#163;"},"num_decimals":{"PYG":0,"JPY":0,"default":2,"TWD":0,"KMF":0,"AFA":0,"RWF":0,"GNF":0,"LYD":3,"COP":0,"TND":3,"BYR":0,"XPF":0,"BIF":0,"IDR":0,"VND":0,"ECS":0,"KRW":0,"JOD":3,"TMM":0,"XAF":0,"RUB":0,"TJR":0,"CLP":0,"VUV":0,"MGA":0,"DJF":0,"ISK":0,"HUF":0,"KWD":3,"XOF":0,"IQD":3,"LAK":0,"UGX":0,"MZM":0,"OMR":3,"BHD":3},"currency_separator":{"USD":"","GBP":"","JPY":"","default":"&nbsp;"},"group_separator":{"default":","},"decimal_separator":{"default":"."},"symbol_position":{"PLN":"after","default":"before","RON":"after","CZK":"after"}},
        distance_config: "metric",
        b_hotel_currencycode: "EUR",
        is_listview_page: true,
        b_this_weekend_checkin: "",
        b_this_weekend_checkout: "",
        b_next_weekend_checkin: "",
        b_next_weekend_checkout: "",
        b_official_continent: "",
        b_deals_continents : "",
        b_messenger_url: '',
        b_open_messenger: false,
        b_is_asian_user: '',
        b_days_to_checkin: '',
        is_bh_property_page: 1,
        b_is_vacation_rental: 1,
        is_apartment_like: 1,
        b_extra_ajax_headers: { },
        et_debug_level: '0',
        b_pricemode: 2,
        fe_china_dot_cn_redirect_logged: 2,
        notification_squeaks: {
            entrypoint_clicked_on_www: 'HSWedNTUQODPdWYaDFRURURHe',
        message_clicked_for_bbgrowth_emp_join: 'OGdCAFOWTNWKcYALOWUeELSSIET',
        message_clicked_for_bbtool_invite: 'OGdCAFOWTNWKcNKJTXGMEO',
        message_clicked_for_bh_no_bookings_splash: 'OGdCAFOWTNSfdQaPSOebJXQWFLO',
        message_clicked_for_cc_expiry: 'OGdCAFOWTNFHNZZPaJKe',
        message_clicked_for_confirm_primary_email: 'OGdCAFOWTNFceHBeDFbbXfVZJO',
        message_clicked_for_edited_collaborated_wl: 'OGdCAFOWTNFEZaSWKfOeeRTNfWbKMKe',
        message_clicked_for_grap_invitation: 'OGdCAFOWTNJIbeVDHIRIKe',
        message_clicked_for_list_your_property_notification: 'OGdCAFOWTNDbMaOMZWEYcZbCATAJRXRT',
        message_clicked_for_multiple_upcoming_bookings: 'OGdCAFOWTNSCMSGEcNQJTedPeHT',
        message_clicked_for_parter_initiated_date_change: 'OGdCAFOWTNWSZQVUcTAVRGHJPHHT',
        message_clicked_for_pay_invalid_cc: 'OGdCAFOWTNJNbVcLUUIZCC',
        message_clicked_for_pay_validate_cc: 'OGdCAFOWTNJNbAfUGfdFMO',
        message_clicked_for_pending_review: 'OGdCAFOWTNSYNCedLae',
        message_clicked_for_promote_deals_page: 'OGdCAFOWTNFHKXBPQPDcOXT',
        message_clicked_for_question_answered: 'OGdCAFOWTNFDSFSPATSeRXGWe',
        message_clicked_for_restaurant_city_guide: 'OGdCAFOWTNFNYKdadNOOWWDbbTKDKe',
        message_clicked_for_review_deadline: 'OGdCAFOWTNFWDOZXFRT',
        message_clicked_for_review_votes_received: 'OGdCAFOWTNFWDPIXYQERMPFIPGO',
        message_clicked_for_travel_communities: 'OGdCAFOWTNDUFYQWdZAUbLPYO',
        message_clicked_for_unbooked_searches: 'OGdCAFOWTNDALGUAJAGO',
        message_clicked_for_unbooked_wl: 'OGdCAFOWTNDALGUVVHO',
        message_clicked_for_upcoming_booking: 'OGdCAFOWTNSdEDeZBTC',
        message_clicked_for_upgrade_available: 'OGdCAFOWTNSdafbOONMOKe',
        message_clicked_for_wallet_credit: 'OGdCAFOWTNFRZIAKLSPMEZaWe',
        message_clicked_for_wihslist_collaborated: 'OGdCAFOWTNRDBcSDbMIJTeeXecDILT',
},
        fe_is_cname_cobrand_header_available: '',
        wl_squeak: {
            open_wishlist_from_hp: 'ZQafLebbMTSDSC',
        create_wishlist_from_hp: 'bYDXYFdKMDNdEPUUBYT',
},
        genius_vip_squeaks: {
            gnsSpun_bannerView_hp: 'TDXRPCTOYESVCMIWIOQHFRYNHe',
        gnsSpun_bannerCtaClick_hp: 'TDXRPCTOYESVCMIWIAHIcaWGNPZSOBO',
        gnsSpun_modalView_hp: 'TDXRPCTOYESEIEYXWCcYbaBBYT',
        gnsSpun_modalCtaClick_hp: 'TDXRPCTOYESEIEYXWIYKdVaQBYNZDSC',
        gnsInsCrd_bannerView_hp: 'TDXRPVRBKKJVbFPbVCMIWIOQHFRYNHe',
        gnsInsCrd_bannerCtaClick_hp: 'TDXRPVRBKKJVbFPbVCMIWIAHIcaWGNPZSOBO',
        gnsInsCrd_modalView_hp: 'TDXRPVRBKKJVbFPbEIEYXWCcYbaBBYT',
        gnsInsCrd_modalCtaClick_hp: 'TDXRPVRBKKJVbFPbEIEYXWIYKdVaQBYNZDSC',
        gnsBkun_bannerView_hp: 'TDXRPVReBZAPXPRLaWNBALOOBO',
        gnsBkun_bannerCtaClick_hp: 'TDXRPVReBZAPXPRLaWBXFJVGSBBNPZWe',
        gnsBkun_modalView_hp: 'TDXRPVReBZAZXDOXVaUSIcCDSC',
        gnsBkun_modalCtaClick_hp: 'TDXRPVReBZAZXDOXVaSXbfIAbSOBYNHe',
        gnsInsDisc_bannerView_hp: 'TDXRPVRBKKQUYBFLLREHGVaUSIcCDSC',
        gnsInsDisc_bannerCtaClick_hp: 'TDXRPVRBKKQUYBFLLREHGVaSXbfIAbSOBYNHe',
        gnsOnbe_modalView_hp: 'TDXRPCTDfELZXDOXVaUSIcCDSC',
        gnsOnbe_modalCtaClick_hp: 'TDXRPCTDfELZXDOXVaSXbfIAbSOBYNHe',
},
        map_open_sr_hp_squeaks: {
            mapOpenInSearchResultsOrHotelPage: 'YdXfTQdcLDWNXFBYT',
},
        trip_types_squeaks : {
            ski_hp_d_map_no_lift_markers:'cJfZHQScWDIKPDPREFHT',
        beach_hp_d_map_no_beach_markers:'YWYHfZHQScWDBaUEVHMbEO',
        beach_hp_d_map_no_beaches_nearby:'YWYHfZHQScWDBaUEIQJZRZae',
        beach_hp_d_panel_response_error:'YWYHfZHQWXdBGZBZeQHVODfcVDZET',
        beach_hp_d_async_scripts_failed:'YWYHfZHQWZTNWffePBGSLYWMVbXEQC',
        ski_hp_d_panel_response_error:'cJfZHQWXdBGZBZeQHVODfcVDZET',
        dummyvar:false
},
        insurance_squeaks : {
            mfe_ready: 'fFaMLVBGVPLXNWSLT',
        quote_reference_received: 'fFaMLAeUVKZMRKIOfFRJXZMHbAae',
        insurance_received: 'fFaMLVDERdafXdDEAJLT'
},
        trackExperiment : function () { },
        "error" : { }
},
        ensureNamespaceExists: function (namespaceString) {
if (!booking[namespaceString]) {
            booking[namespaceString] = {};
}
}, hotel: { }, experiments: { }, startup: { }, experiments_load: { }, startup_load: { }, promotions: { }, timestamp: new Date()};
        function Tip() { };
        (function (scope) {
            booking.env.b_sb_autocomplete_predictions_url = '/autocomplete_csrf';
        booking.env.b_sb_autocomplete_predictions_method = 'GET';
        booking.env.b_sb_googleplaces_carrier_url = 'https://carrier.booking.com/google/places/webautocompletesimple';
        booking.env.b_sb_googleplaces_carrier_method = 'POST';
        var params = scope.search_autocomplete_params = { };
        params.v = '1';
        params.lang = 'en-us';
        params.sid = '1fb0f42abddbd4842ab95206c16bb4e4';
        params.aid = '304142';
        params.pid = '0b5926fba48a0192';
        params.stype = '1';
        params.src = 'hotel';
        params.eb = '0';
        params.e_obj_labels = '1';
        params.context_dest_type = 'city';
        params.context_dest_id = '-1456928';
        params.from_hotel = 1;
        params.e_tclm = 1;
        params.add_themes = '1';
        params.themes_match_start = '1';
        params.include_synonyms = '1';
}(window.autocomplete_vars || booking.env));
    </script>