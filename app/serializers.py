from rest_framework import serializers
class StudentSerializer(serializers.Serializer): #same as forrm
    name = serializers.CharField(max_length=100) #copy from models.py
    roll = serializers.IntegerField()
    city = serializers.CharField(max_length=100)
    
    