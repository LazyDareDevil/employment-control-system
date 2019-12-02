from app.serializers import *
from rest_framework import generics
from rest_framework.views import APIView
from app.models import *
from app.permissions import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse


class WorkplacesListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        queryset =  Workplace.objects.all()
        query_params = request.query_params
        user_id = query_params.get('user_id', None)
        param_1 = query_params.get('param_1', None)
        param_2 = query_params.get('param_2', None)
        param_3 = query_params.get('param_3', None)
        param_4 = query_params.get('param_4', None)

        if user_id != None:
            queryset = queryset.filter(user_id=user_id)
        if param_1 != None:
            queryset = queryset.filter(param_1=param_1)
        if param_2 != None:
            queryset = queryset.filter(param_2=param_2)
        if param_3 != None:
            queryset = queryset.filter(param_3=param_3)
        if param_4 != None:
            queryset = queryset.filter(param_4=param_4)
        serializer = WorkplaceListSerializer(queryset, many=True)
        return Response({'workplaces': serializer.data},status=status.HTTP_200_OK)


class WorkplaceView(APIView):
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        try:
            return Workplace.objects.get(id=pk)
        except Workplace.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        workplace = self.get_object(pk)
        serializer = WorkplaceListSerializer(workplace)
        return Response({'workplace': serializer.data},status=status.HTTP_200_OK)

    def put(self, request, pk):
        if request.user.is_staff:
            workplace = self.get_object(pk)
            serializer = WorkplaceListSerializer(workplace, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=HTTP_404_NOT_FOUND)

    def post(self, request):
        if request.user.is_staff:
            serializer = WorkplaceListSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        if request.user.is_staff:
            workplace = self.get_object(pk)
            workplace.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=HTTP_404_NOT_FOUND)


class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileParametersListSerializer
    queryset = Profile.objects.all()
    permission_classes = (IsOwnerOrAdmin, )

    def get_object(self, pk):
        try:
            return Profile.objects.get(user=pk)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        profile = self.get_object(pk)
        serializer = ProfileParametersListSerializer(profile)
        return Response({'profile': serializer.data},status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProfileParametersListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        profile = self.get_object(pk)
        serializer = ProfileParametersListSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        if request.user.is_staff:
            profile = self.get_object(pk)
            profile.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=HTTP_404_NOT_FOUND)

class myProfileView(generics.CreateAPIView):
    serializer_class = ProfileParametersListSerializer
    queryset = Profile.objects.all()
    permission_classes = (IsAuthenticated, )

    def get_object(self):
        try:
            return Profile.objects.get(user=self.request.user.id)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request):
        profile = self.get_object()
        serializer = ProfileParametersListSerializer(profile)
        return Response({'profile': serializer.data},status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProfileParametersListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        profile = self.get_object()
        serializer = ProfileParametersListSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        if request.user.is_staff:
            profile = self.get_object()
            profile.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=HTTP_404_NOT_FOUND)


class ProfilesListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        queryset =  Profile.objects.all()
        query_params = request.query_params
        id = query_params.get('id', None)
        param_1 = query_params.get('param_1', None)
        param_2 = query_params.get('param_2', None)
        param_3 = query_params.get('param_3', None)
        param_4 = query_params.get('param_4', None)
        user = query_params.get('user', None)

        if id != None:
            queryset = queryset.filter(id=id)
        if param_1 != None:
            queryset = queryset.filter(param_1=param_1)
        if param_2 != None:
            queryset = queryset.filter(param_2=param_2)
        if param_3 != None:
            queryset = queryset.filter(param_3=param_3)
        if param_4 != None:
            queryset = queryset.filter(param_4=param_4)
        if user != None:
            queryset = queryset.filter(user=user)
        serializer = ProfileParametersListSerializer(queryset, many=True)
        return Response({'profiles': serializer.data},status=status.HTTP_200_OK)
