from rest_framework import serializers
from app.models import *

class WorkplaceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workplace
        fields = '__all__'

class WorkplaceListSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default = serializers.CurrentUserDefault())

    class Meta:
        model = Workplace
        fields = '__all__'

class ProfileParametersListSerializer(serializers.ModelSerializer):
    #user = serializers.HiddenField(default = serializers.CurrentUserDefault())

    class Meta:
        model = Profile
        fields = '__all__'
