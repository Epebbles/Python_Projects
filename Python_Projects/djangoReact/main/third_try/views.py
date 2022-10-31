from multiprocessing import context
from django.shortcuts import render
def index(request):
    context = {
        "name": "Evan",
        "favorite_color": "purple",
        "pets": ["Kevin", "Dekota"]
    }
    return render(request, "index.html", context)

# Create your views here.
