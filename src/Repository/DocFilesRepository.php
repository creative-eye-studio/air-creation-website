<?php

namespace App\Repository;

use App\Classes\DocSearch;
use App\Entity\DocFiles;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DocFiles>
 *
 * @method DocFiles|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocFiles|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocFiles[]    findAll()
 * @method DocFiles[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocFilesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocFiles::class);
    }

    public function save(DocFiles $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DocFiles $entity, bool $flush = false): void
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
//     * @return DocFiles[] Returns an array of DocFiles objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DocFiles
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
