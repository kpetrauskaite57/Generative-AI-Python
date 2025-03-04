import requests

def fetch_todos():
    url = "https://jsonplaceholder.typicode.com/todos"
    response = requests.get(url)
    
    if response.status_code == 200:
        todos = response.json()
        for todo in todos[:10]:
            print(f"ID: {todo['id']}, Title: {todo['title']}, Completed: {todo['completed']}")
    else:
        print(f"Failed to fetch todos. Status code: {response.status_code}")

if __name__ == "__main__":
    fetch_todos()