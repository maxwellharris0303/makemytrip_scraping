import datetime

def get_current_date():
    current_date = datetime.date.today()
    next_date = current_date + datetime.timedelta(days=1)
    formatted_today_date = current_date.strftime("%Y-%m-%d")
    formatted_next_date = next_date.strftime("%Y-%m-%d")
    return formatted_today_date, formatted_next_date

# print(get_current_date())