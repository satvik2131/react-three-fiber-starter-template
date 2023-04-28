
export function Scene() {
    return (
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 3, 3]} />
            <meshBasicMaterial />
        </mesh>
    );
}