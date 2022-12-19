from django.contrib import admin
from django.urls import path
from. import views

urlpatterns = [
    path("student/",views.student_list, name="list" ),
    path("student/<int:pk>",views.student_details, name="student" )]