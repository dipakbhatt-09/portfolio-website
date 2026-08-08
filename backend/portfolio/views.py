from rest_framework import generics

from .models import (
    Hero,
    About,
    Skill,
    Education,
    Experience,
    Service,
    Project,
    SocialLink,
)

from .serializers import (
    HeroSerializer,
    AboutSerializer,
    SkillSerializer,
    EducationSerializer,
    ExperienceSerializer,
    ServiceSerializer,
    ProjectSerializer,
    SocialLinkSerializer,
)


# Hero Views
class HeroListAPIView(generics.ListAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer



# About Views
class AboutListAPIView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer



# Skill Views
class SkillListAPIView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer



# Education Views
class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer



# Experience Views
class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer



# Service Views
class ServiceListAPIView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer



# Project Views
class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer



# Social Link Views
class SocialLinkListAPIView(generics.ListAPIView):
    queryset = SocialLink.objects.filter(is_active=True).order_by("id")
    serializer_class = SocialLinkSerializer