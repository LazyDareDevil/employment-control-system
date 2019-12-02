from django.urls import path
from app.views import *

app_name = 'app'
urlpatterns = [
    path('workplace/<int:pk>', WorkplaceView.as_view()),
    path('workplaces/', WorkplacesListView.as_view()),
    path('profile/<pk>', ProfileView.as_view()),
    path('profiles/', ProfilesListView.as_view()),
    path('my_profile/', myProfileView.as_view()),
]
