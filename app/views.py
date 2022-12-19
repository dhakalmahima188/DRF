from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse

# Create your views here.
def student_details(request):
    stu = Student.objects.get(id=1)
    print(stu) #object
    serializer = StudentSerializer(stu)
    print(serializer) #object with its models
    print(serializer.data) #data in dictionary format
    json_data = JSONRenderer().render(serializer.data) #converts data into json format
    print(json_data)
    return HttpResponse(json_data,content_type='application/json')
