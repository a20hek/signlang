- `cd backend`
- `py -m venv venv`
- `pip install requirments.txt`
- `flask run`
# API Details
- `http://127.0.0.1:5000/predict`
- 
```
{
    'image': 'your_image_here'
}
```
- Output
```
{
    'prediction': 'YES'
}
```