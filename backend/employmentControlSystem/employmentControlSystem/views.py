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

import json
from django.http import JsonResponse

def index(request):
    return render(request, "index.html")

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    request_json = json.load(request)
    username = request_json["username"]
    password = request_json["password"]
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    # user = authenticate(username=username, password=password)
    # if not user:
    #     print('here')
    #     return Response({'error': 'Invalid Credentials'},
    #                     status=HTTP_401_UNAUTHORIZED)
    #
    # token, _ = Token.objects.get_or_create(user=user)

    # response_data = {
    #     'token': 'abc'
    # }
    resp = JsonResponse({'token': 'abc'})
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp
    # return Response({'token': 'abc'},
    #                 status=HTTP_200_OK)

@csrf_exempt
@api_view(["DELETE"])
def logout(request):
    try:
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({'status': 'Token was broken'},
            status=HTTP_200_OK)
    except:
        try:
            token.delete()
            return Response({'status': 'Error'},
                status=HTTP_401_UNAUTHORIZED)
        except:
            return Response({'status': "Error: User hasn't token"},
                status=HTTP_401_UNAUTHORIZED)
