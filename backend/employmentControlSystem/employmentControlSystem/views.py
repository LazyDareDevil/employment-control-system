from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_401_UNAUTHORIZED,
    HTTP_200_OK
)
from rest_framework.response import Response
from django.views.generic import TemplateView
from django.shortcuts import render
from django.db import IntegrityError, transaction
import json
from django.http import JsonResponse
from app.models import *
from app.serializers import *


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    request_json = json.load(request)
    try:
        username = request_json["username"]
        password = request_json["password"]
    except:
        resp = JsonResponse({'error': 'Please provide both username and password'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
        #return JsonResponse({'error': 'Please provide both username and password'}, status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        resp = JsonResponse({'error': 'Invalid Credentials'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
        #return JsonResponse({'error': 'Invalid Credentials'}, status=HTTP_401_UNAUTHORIZED)

    token, _ = Token.objects.get_or_create(user=user)
    resp = JsonResponse({'token': token.key})
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp
    #return Response({'token': token.key}, status=HTTP_200_OK)

@csrf_exempt
@api_view(["DELETE"])
def logout(request):
    request_json = json.load(request)
    try:
        request_token = request_json["token"]
        token = Token.objects.get(key=request_token)
        token.delete()
        resp = JsonResponse({'status': 'Token was broken'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
        #return Response({'status': 'Token was broken'},status=HTTP_200_OK)
    except:
        resp = JsonResponse({'error': 'Incorrect token'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
        # try:
        #     token.delete()
        #     return Response({'status': 'Error'},status=HTTP_401_UNAUTHORIZED)
        # except:
        #     return Response({'status': "User hasn't token"},status=HTTP_401_UNAUTHORIZED)

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def get_workplaces(request):
    request_json = json.load(request)
    request_token = request_json["token"]

    # РїРѕРёСЃРє СЃРІРѕР±РѕРґРЅС‹С… РјРµСЃС‚ (РїР°СЂР°РјРµС‚СЂС‹ РїРѕРєР° РЅРµ РёСЃРїРѕР»СЊР·СѓРµРј)
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
    serializer = WorkplaceSerializer(queryset, many=True)

    resp = JsonResponse({'amount': len(queryset), 'places': serializer.data})
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def take_place(request):
    request_json = json.load(request)
    try:
        # Р·Р°РЅСЏС‚РёРµ РјРµСЃС‚Р° РІ Р±Рґ Рё С‚.Рґ.
        request_token = request_json["token"]
        place = request_json["place"]
        workplace = Workplace.objects.get(id=place)
        user = Token.objects.get(key=request_token).user
        user_id = User.objects.get(username=user).id
        if workplace.user_id == 0 or workplace.user_id == user_id:
            with transaction.atomic():
                workplace = Workplace.objects.get(id=place)
                workplace.user_id = user_id
                workplace.save(update_fields=["user_id"])
                queryset =  Workplace.objects.get(id=place)
                serializer = WorkplaceSerializer(queryset)
                resp = JsonResponse({'data': serializer.data})
                resp['Access-Control-Allow-Origin'] = '*'
                resp["Access-Control-Allow-Headers"] = '*'
                return resp
        else:
            resp = JsonResponse({'error': 'Place is taken'})
            resp['Access-Control-Allow-Origin'] = '*'
            resp["Access-Control-Allow-Headers"] = '*'
            return resp
    except:
        resp = JsonResponse({'error': 'Incorrect data'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def leave_place(request):
    request_json = json.load(request)
    try:
        request_token = request_json["token"]
        # РІ РјРёР»Р»РёСЃРµРєСѓРЅРґР°С…
        time = int(request_json["time"])
    except:
        resp = JsonResponse({'error': 'Incorrect request'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
    try:
        check = time*400/3600000
        user = Token.objects.get(key=request_token).user
        user_id = User.objects.get(username=user).id
        workplace = Workplace.objects.get(user_id=user_id)

        with transaction.atomic():
            workplace.user_id = 0
            workplace.save(update_fields=["user_id"])
            resp = JsonResponse({'check': check + " rub"})
            resp['Access-Control-Allow-Origin'] = '*'
            resp["Access-Control-Allow-Headers"] = '*'
            return resp
    except:
        resp = JsonResponse({'error': 'You haven\'t place'})
        resp['Access-Control-Allow-Origin'] = '*'
        resp["Access-Control-Allow-Headers"] = '*'
        return resp
