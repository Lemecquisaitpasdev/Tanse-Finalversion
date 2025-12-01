#!/bin/bash

# 🎯 Script de vérification SEO/GEO - TANSE
# Exécute tous les tests de crawlabilité et génère un rapport

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║     TESTS SEO/GEO - TANSE (www.tanse.fr)                 ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="https://www.tanse.fr"

# Fonction pour afficher un test
run_test() {
    local test_name="$1"
    local test_cmd="$2"
    local expected="$3"

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🔍 TEST: $test_name"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    result=$(eval "$test_cmd")

    if [ -n "$result" ]; then
        echo -e "${GREEN}✅ SUCCÈS${NC}"
        echo "$result"
    else
        echo -e "${RED}❌ ÉCHEC${NC}"
        echo "Attendu: $expected"
    fi

    echo ""
}

# ============================================
# TEST 1: TITLES DES PAGES
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 1: TITLES DES PAGES"
echo "═══════════════════════════════════════════════════════════"
echo ""

run_test "Title /audit-offert" \
    "curl -s $BASE_URL/audit-offert | grep '<title>'" \
    "<title>Audit SEO + GEO Gratuit : Analysez Votre Visibilité — TANSE</title>"

run_test "Title /offre-5-places" \
    "curl -s $BASE_URL/offre-5-places | grep '<title>'" \
    "<title>Offre 5 Places : Setup SEO + GEO Offert (1490€) — TANSE</title>"

run_test "Title /geo" \
    "curl -s $BASE_URL/geo | grep '<title>'" \
    "<title>GEO : Optimisation pour les Moteurs IA & Answer Engines — TANSE</title>"

# ============================================
# TEST 2: META DESCRIPTIONS
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 2: META DESCRIPTIONS"
echo "═══════════════════════════════════════════════════════════"
echo ""

run_test "Meta description /audit-offert" \
    "curl -s $BASE_URL/audit-offert | grep -i 'meta name=\"description\"'" \
    "Obtenez gratuitement votre audit SEO + GEO complet..."

run_test "Meta description /offre-5-places" \
    "curl -s $BASE_URL/offre-5-places | grep -i 'meta name=\"description\"'" \
    "Profitez d'un setup SEO + GEO complet gratuit (valeur 1490€)..."

run_test "Meta description /geo" \
    "curl -s $BASE_URL/geo | grep -i 'meta name=\"description\"'" \
    "Découvrez le GEO (Generative Engine Optimization)..."

# ============================================
# TEST 3: SCHEMA.ORG
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 3: SCHEMA.ORG STRUCTURED DATA"
echo "═══════════════════════════════════════════════════════════"
echo ""

homepage_schemas=$(curl -s $BASE_URL/ | grep -o 'application/ld+json' | wc -l)
echo "🔍 Homepage - Nombre de schemas JSON-LD"
if [ "$homepage_schemas" -ge 2 ]; then
    echo -e "${GREEN}✅ SUCCÈS${NC} - $homepage_schemas schemas trouvés (attendu: 2+)"
else
    echo -e "${RED}❌ ÉCHEC${NC} - $homepage_schemas schemas trouvés (attendu: 2+)"
fi
echo ""

audit_schemas=$(curl -s $BASE_URL/audit-offert | grep -o '@type' | wc -l)
echo "🔍 /audit-offert - Nombre de @type schemas"
if [ "$audit_schemas" -ge 3 ]; then
    echo -e "${GREEN}✅ SUCCÈS${NC} - $audit_schemas @type trouvés (attendu: 3+)"
else
    echo -e "${RED}❌ ÉCHEC${NC} - $audit_schemas @type trouvés (attendu: 3+)"
fi
echo ""

offre_schemas=$(curl -s $BASE_URL/offre-5-places | grep -o '@type' | wc -l)
echo "🔍 /offre-5-places - Nombre de @type schemas"
if [ "$offre_schemas" -ge 4 ]; then
    echo -e "${GREEN}✅ SUCCÈS${NC} - $offre_schemas @type trouvés (attendu: 4+)"
else
    echo -e "${YELLOW}⚠️  ATTENTION${NC} - $offre_schemas @type trouvés (attendu: 4+)"
fi
echo ""

# ============================================
# TEST 4: ROBOTS.TXT
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 4: ROBOTS.TXT"
echo "═══════════════════════════════════════════════════════════"
echo ""

echo "🔍 Contenu de /robots.txt"
robots_content=$(curl -s $BASE_URL/robots.txt)

if echo "$robots_content" | grep -q "User-Agent: \*"; then
    echo -e "${GREEN}✅ User-Agent: * trouvé${NC}"
else
    echo -e "${RED}❌ User-Agent: * manquant${NC}"
fi

if echo "$robots_content" | grep -q "GPTBot"; then
    echo -e "${GREEN}✅ GPTBot autorisé${NC}"
else
    echo -e "${RED}❌ GPTBot non trouvé${NC}"
fi

if echo "$robots_content" | grep -q "ChatGPT-User"; then
    echo -e "${GREEN}✅ ChatGPT-User autorisé${NC}"
else
    echo -e "${RED}❌ ChatGPT-User non trouvé${NC}"
fi

if echo "$robots_content" | grep -q "Google-Extended"; then
    echo -e "${GREEN}✅ Google-Extended autorisé${NC}"
else
    echo -e "${RED}❌ Google-Extended non trouvé${NC}"
fi

if echo "$robots_content" | grep -q "ClaudeBot"; then
    echo -e "${GREEN}✅ ClaudeBot autorisé${NC}"
else
    echo -e "${RED}❌ ClaudeBot non trouvé${NC}"
fi

if echo "$robots_content" | grep -q "PerplexityBot"; then
    echo -e "${GREEN}✅ PerplexityBot autorisé${NC}"
else
    echo -e "${RED}❌ PerplexityBot non trouvé${NC}"
fi

if echo "$robots_content" | grep -q "Sitemap:"; then
    echo -e "${GREEN}✅ Sitemap déclaré${NC}"
else
    echo -e "${RED}❌ Sitemap manquant${NC}"
fi

echo ""
echo "Contenu complet:"
echo "$robots_content"
echo ""

# ============================================
# TEST 5: SITEMAP.XML
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 5: SITEMAP.XML"
echo "═══════════════════════════════════════════════════════════"
echo ""

echo "🔍 Vérification du sitemap.xml"
sitemap_content=$(curl -s $BASE_URL/sitemap.xml)

if echo "$sitemap_content" | grep -q "<urlset"; then
    echo -e "${GREEN}✅ Sitemap XML valide${NC}"
else
    echo -e "${RED}❌ Format XML invalide${NC}"
fi

urls_count=$(echo "$sitemap_content" | grep -c "<loc>")
echo -e "${GREEN}✅ Nombre d'URLs trouvées: $urls_count${NC}"

echo ""
echo "URLs critiques vérifiées:"

critical_urls=(
    "https://www.tanse.fr/"
    "https://www.tanse.fr/geo"
    "https://www.tanse.fr/audit-offert"
    "https://www.tanse.fr/offre-5-places"
    "https://www.tanse.fr/blog-seo-geo"
)

for url in "${critical_urls[@]}"; do
    if echo "$sitemap_content" | grep -q "$url"; then
        echo -e "${GREEN}✅${NC} $url"
    else
        echo -e "${RED}❌${NC} $url (MANQUANT)"
    fi
done

echo ""
echo "Premier extrait du sitemap (20 premières lignes):"
echo "$sitemap_content" | head -20
echo ""

# ============================================
# TEST 6: CANONICAL URLS
# ============================================
echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  TEST 6: CANONICAL URLS"
echo "═══════════════════════════════════════════════════════════"
echo ""

run_test "Canonical /audit-offert" \
    "curl -s $BASE_URL/audit-offert | grep 'rel=\"canonical\"'" \
    '<link rel="canonical" href="https://www.tanse.fr/audit-offert"/>'

run_test "Canonical /offre-5-places" \
    "curl -s $BASE_URL/offre-5-places | grep 'rel=\"canonical\"'" \
    '<link rel="canonical" href="https://www.tanse.fr/offre-5-places"/>'

run_test "Canonical /geo" \
    "curl -s $BASE_URL/geo | grep 'rel=\"canonical\"'" \
    '<link rel="canonical" href="https://www.tanse.fr/geo"/>'

# ============================================
# RÉSUMÉ FINAL
# ============================================
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    RÉSUMÉ FINAL                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "✅ Tests terminés!"
echo ""
echo "📋 PROCHAINES ÉTAPES:"
echo "   1. Vérifier les résultats ci-dessus"
echo "   2. Tester manuellement dans un navigateur"
echo "   3. Valider avec Google Rich Results Test:"
echo "      → https://search.google.com/test/rich-results"
echo "   4. Valider avec Schema.org Validator:"
echo "      → https://validator.schema.org/"
echo "   5. Soumettre le sitemap à Google Search Console"
echo ""
echo "🎯 Objectif: 100% de tests au vert ✅"
echo ""
