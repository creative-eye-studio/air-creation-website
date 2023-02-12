<?php

namespace App\Repository;

use App\Classes\DocSearch;
use App\Entity\DocProducts;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DocProducts>
 *
 * @method DocProducts|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocProducts|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocProducts[]    findAll()
 * @method DocProducts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocProducts::class);
    }

    public function save(DocProducts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DocProducts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Requète pour récupérer les produits selon la recherche
     */
    public function findDocWithSearch(DocSearch $search)
    {
        $query = $this
            ->createQueryBuilder('p')
            ->select('p')
        ;

        if (!empty($search->product_type)) {
            $query = $query
                ->andWhere('p.product_type IN (:product_type)')
                ->setParameter(':product_type', $search->product_type)
            ;
        }

        return $query->getQuery()->getResult();
    }

//    /**
//     * @return DocProducts[]
//     */
    /*public function findAllProducts()
    {
        return $this->createQueryBuilder('d')
            ->where('d.product_name = :id')
            ->getQuery()
            ->getResult()
        ;
    }*/

//    public function findOneBySomeField($value): ?DocProducts
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
