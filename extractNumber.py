import re

# string = "San Nicolas Aru45ba:4545 95 properties found"

def get_extract_number(string):
    match = re.search(r'(\d+)\s+properties', string)
    if match:
        num_properties = int(match.group(1))
        # print(num_properties)
        return num_properties