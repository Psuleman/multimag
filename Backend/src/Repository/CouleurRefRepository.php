<?php

namespace App\Repository;

use App\Entity\CouleurRef;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CouleurRef>
 *
 * @method CouleurRef|null find($id, $lockMode = null, $lockVersion = null)
 * @method CouleurRef|null findOneBy(array $criteria, array $orderBy = null)
 * @method CouleurRef[]    findAll()
 * @method CouleurRef[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CouleurRefRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CouleurRef::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(CouleurRef $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(CouleurRef $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return CouleurRef[] Returns an array of CouleurRef objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CouleurRef
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
