from rest_framework import permissions
from rest_framework.permissions import SAFE_METHODS

class IsOwnerOrAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return (obj.user == request.user) or (request.user.is_staff) or (request.method in SAFE_METHODS)
