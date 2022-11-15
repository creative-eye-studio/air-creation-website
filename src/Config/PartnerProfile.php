<?php

namespace App\Config;

enum PartnerProfile: string
{
    case Revendeur = "Revendeur";
    case Importateur = "Importateur";
    case Technique = "Technique";
}